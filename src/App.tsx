import { Contact } from '@/Components/Contact'
import { Education } from '@/Components/Education'
import { Experience } from '@/Components/Experience'
import { Footer } from '@/Components/Footer'
import { Hero } from '@/Components/Hero'
import { Navbar } from '@/Components/Navbar'
import { Projects } from '@/Components/Projects'
import { Skills } from '@/Components/Skills'
import { usePortfolioEffects } from '@/hooks/usePortfolioEffects'
import './App.css'

function App() {
  usePortfolioEffects()

  return (
    <>
      <div id="cursor" />
      <div id="cursor-trail" />
      <canvas id="bg-canvas" aria-hidden="true" />

      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
