import { useEffect } from 'react'

export function usePortfolioEffects() {
  useCanvasBackground()
  useRevealAnimation()
  useCustomCursor()
  useCardTilt()
}

function useCanvasBackground() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement | null
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let animation = 0
    let width = 0
    let height = 0
    let mouseX = 0
    let mouseY = 0
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      s: Math.random() * 1.8 + 0.4,
    }))

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const drawWireShape = (cx: number, cy: number, radius: number, sides: number, rotation: number, color: string) => {
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let i = 0; i <= sides; i += 1) {
        const angle = rotation + (Math.PI * 2 * i) / sides
        const x = cx + Math.cos(angle) * radius
        const y = cy + Math.sin(angle) * radius
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      for (let i = 0; i < sides; i += 1) {
        const angle = rotation + (Math.PI * 2 * i) / sides
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius)
        ctx.stroke()
      }
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height)
      const driftX = mouseX * 18
      const driftY = mouseY * 18

      particles.forEach((particle) => {
        const x = ((particle.x * width + time * 0.006 * particle.z) % width) + driftX * particle.z
        const y = particle.y * height + Math.sin(time * 0.0004 + particle.x * 8) * 16 + driftY * particle.z
        ctx.fillStyle = `rgba(108, 99, 255, ${0.16 + particle.z * 0.34})`
        ctx.beginPath()
        ctx.arc(x, y, particle.s, 0, Math.PI * 2)
        ctx.fill()
      })

      drawWireShape(width * 0.78 + driftX, height * 0.28 + driftY, 92, 10, time * 0.0004, 'rgba(108,99,255,0.12)')
      drawWireShape(width * 0.18 - driftX, height * 0.32 - driftY, 76, 18, -time * 0.00035, 'rgba(0,212,170,0.1)')
      drawWireShape(width * 0.72 - driftX, height * 0.72 + driftY, 58, 8, time * 0.00055, 'rgba(167,139,250,0.12)')
      animation = requestAnimationFrame(animate)
    }

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5
      mouseY = event.clientY / window.innerHeight - 0.5
    }

    resize()
    animation = requestAnimationFrame(animate)
    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(animation)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
}

function useRevealAnimation() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useCustomCursor() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    const cur = document.getElementById('cursor')
    const trail = document.getElementById('cursor-trail')
    if (!cur || !trail) return

    cur.style.display = 'block'
    trail.style.display = 'block'
    let mx = 0
    let my = 0
    let tx = 0
    let ty = 0
    let frame = 0

    const onMouseMove = (event: MouseEvent) => {
      mx = event.clientX
      my = event.clientY
      cur.style.left = `${mx - 6}px`
      cur.style.top = `${my - 6}px`
    }

    const animateTrail = () => {
      tx += (mx - tx) * 0.12
      ty += (my - ty) * 0.12
      trail.style.left = `${tx - 18}px`
      trail.style.top = `${ty - 18}px`
      frame = requestAnimationFrame(animateTrail)
    }

    const interactiveEls = Array.from(document.querySelectorAll('a,button,.skill-tile,.proj-card,.edu-item'))
    const enter = () => {
      cur.style.transform = 'scale(2.5)'
      trail.style.transform = 'scale(1.5)'
    }
    const leave = () => {
      cur.style.transform = 'scale(1)'
      trail.style.transform = 'scale(1)'
    }

    document.addEventListener('mousemove', onMouseMove)
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    frame = requestAnimationFrame(animateTrail)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('mousemove', onMouseMove)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])
}

function useCardTilt() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const wrap = document.getElementById('card3d-wrap')
    const card = document.getElementById('card3d')
    if (!wrap || !card) return

    const onMouseMove = (event: MouseEvent) => {
      const rect = wrap.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 22
      const y = -((event.clientY - rect.top) / rect.height - 0.5) * 22
      card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    }
    const onMouseLeave = () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }

    wrap.addEventListener('mousemove', onMouseMove)
    wrap.addEventListener('mouseleave', onMouseLeave)
    return () => {
      wrap.removeEventListener('mousemove', onMouseMove)
      wrap.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])
}
