import { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

const baseProps = (size: number, rest: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...rest,
})

export function TokenIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <polygon points="16,3 28,10 28,22 16,29 4,22 4,10" />
      <polygon points="16,8 23,12 23,20 16,24 9,20 9,12" opacity="0.45" />
      <line x1="16" y1="3" x2="16" y2="8" />
      <line x1="16" y1="24" x2="16" y2="29" />
    </svg>
  )
}

export function MultiEntityIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <rect x="4" y="11" width="11" height="13" />
      <rect x="17" y="8" width="11" height="16" />
      <line x1="8" y1="15" x2="11" y2="15" />
      <line x1="8" y1="19" x2="11" y2="19" />
      <line x1="21" y1="13" x2="24" y2="13" />
      <line x1="21" y1="17" x2="24" y2="17" />
      <line x1="21" y1="21" x2="24" y2="21" />
      <path d="M15 17 L17 17" strokeDasharray="1 1.5" />
    </svg>
  )
}

export function InstrumentIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M7 4 L21 4 L25 8 L25 28 L7 28 Z" />
      <path d="M21 4 L21 8 L25 8" />
      <line x1="11" y1="14" x2="21" y2="14" />
      <line x1="11" y1="18" x2="21" y2="18" />
      <line x1="11" y1="22" x2="17" y2="22" />
    </svg>
  )
}

export function RegulatoryIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <line x1="16" y1="5" x2="16" y2="27" />
      <line x1="8" y1="27" x2="24" y2="27" />
      <line x1="6" y1="9" x2="26" y2="9" />
      <path d="M6 9 L3 17 L9 17 Z" />
      <path d="M26 9 L23 17 L29 17 Z" />
      <circle cx="16" cy="5" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function ClimateIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M16 27 C 8 27 5 21 5 15 C 5 9 11 4 16 4 C 21 4 27 9 27 15 C 27 21 24 27 16 27 Z" />
      <path d="M16 27 C 16 20 19 14 26 11" />
      <path d="M11 8 L13 11" />
      <path d="M22 23 L20 20" />
    </svg>
  )
}

export function ComplianceIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <path d="M16 3 L26 7 L26 16 C 26 22 22 26 16 29 C 10 26 6 22 6 16 L 6 7 Z" />
      <path d="M11 16 L15 20 L22 12" />
    </svg>
  )
}

export function NarrativeIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <polyline points="4,22 11,15 16,19 22,11 28,16" />
      <polyline points="22,11 22,7 26,7" />
      <line x1="4" y1="27" x2="28" y2="27" opacity="0.5" />
    </svg>
  )
}

export function OperatorIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="16" cy="16" r="12" />
      <circle cx="16" cy="16" r="4" />
      <line x1="16" y1="4" x2="16" y2="8" />
      <line x1="16" y1="24" x2="16" y2="28" />
      <line x1="4" y1="16" x2="8" y2="16" />
      <line x1="24" y1="16" x2="28" y2="16" />
    </svg>
  )
}

export function ArchitectIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="16" cy="9" r="3" />
      <line x1="16" y1="12" x2="6" y2="28" />
      <line x1="16" y1="12" x2="26" y2="28" />
      <line x1="11" y1="20" x2="21" y2="20" />
    </svg>
  )
}

export function ProjectIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="16" cy="16" r="11" />
      <circle cx="16" cy="16" r="6" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="16" y1="26" x2="16" y2="30" />
      <line x1="2" y1="16" x2="6" y2="16" />
      <line x1="26" y1="16" x2="30" y2="16" />
    </svg>
  )
}

export function ArrowDiagonalIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)} strokeWidth={1.5}>
      <path d="M9 23 L23 9" />
      <path d="M12 9 L23 9 L23 20" />
    </svg>
  )
}

export function WordmarkGlyph({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)} strokeWidth={1.5}>
      <path d="M5 16 Q 9 8, 16 16 T 27 16" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CustomIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size, rest)}>
      <circle cx="16" cy="16" r="11" strokeDasharray="3 3" />
      <path d="M12 12 L20 20" />
      <path d="M20 12 L12 20" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <circle cx="20" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="20" r="2" fill="currentColor" />
    </svg>
  )
}

