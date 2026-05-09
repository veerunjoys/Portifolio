import type { ReactNode } from 'react'

export type IconName =
  | 'layers'
  | 'download'
  | 'send'
  | 'mail'
  | 'phone'
  | 'linkedin'
  | 'github'
  | 'server'
  | 'monitor'
  | 'database'
  | 'shield'
  | 'brain'
  | 'git'
  | 'building'
  | 'pill'
  | 'video'
  | 'graduation'
  | 'book'
  | 'school'

type IconProps = {
  name: IconName
  size?: number
}

export function Icon({ name, size = 18 }: IconProps) {
  if (name === 'github') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    )
  }

  const paths: Record<Exclude<IconName, 'github'>, ReactNode> = {
    layers: <path d="m12 2 9 5-9 5-9-5 9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4" />,
    download: <path d="M12 3v11M7 9l5 5 5-5M5 21h14" />,
    send: <path d="m22 2-7 20-4-9-9-4 20-7Z" />,
    mail: <path d="M4 4h16v16H4z M4 7l8 6 8-6" />,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.63 2.65a2 2 0 0 1-.45 2.11L8 9.72A16 16 0 0 0 14.28 16l1.24-1.24a2 2 0 0 1 2.11-.45c.85.3 1.74.51 2.65.63A2 2 0 0 1 22 16.92Z" />,
    linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
    server: <path d="M4 4h16v6H4z M4 14h16v6H4z M8 7h.01M8 17h.01" />,
    monitor: <path d="M3 4h18v12H3z M8 20h8M12 16v4" />,
    database: <path d="M12 3c5 0 8 1.5 8 3.5S17 10 12 10 4 8.5 4 6.5 7 3 12 3Zm-8 3.5v5C4 13.5 7 15 12 15s8-1.5 8-3.5v-5M4 11.5v5C4 18.5 7 20 12 20s8-1.5 8-3.5v-5" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z M9 12l2 2 4-5" />,
    brain: <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a4 4 0 0 0 4 4h1V3H9Zm6 0a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a4 4 0 0 1-4 4h-1V3h2Z" />,
    git: <path d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 9v6M8.5 7.5 15.5 5.5" />,
    building: <path d="M4 21V3h10v18M14 8h6v13M8 7h2M8 11h2M8 15h2M17 12h1M17 16h1M2 21h20" />,
    pill: <path d="M10 21a6 6 0 0 1-4.24-10.24l5-5a6 6 0 0 1 8.48 8.48l-5 5A6 6 0 0 1 10 21Zm-1.5-9.5 4 4" />,
    video: <path d="M4 5h12v14H4z M16 10l5-3v10l-5-3" />,
    graduation: <path d="m22 10-10-5-10 5 10 5 10-5Z M6 12v5c2 2 10 2 12 0v-5" />,
    book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z M4 19.5A2.5 2.5 0 0 0 6.5 22H20" />,
    school: <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6M10 10h4" />,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
