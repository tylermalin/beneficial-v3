import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

/* ============================================================
   Obsidian Lime primitives
   ============================================================ */

type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap font-medium tracking-tight ' +
  'transition-[filter,background-color,border-color,box-shadow] duration-200 ease-obsidian-out ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50'

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-white text-black hover:brightness-[.92]',
  accent: 'bg-lime-400 text-black shadow-glow-accent hover:brightness-[.92] hover:shadow-[0_0_32px_rgba(184,233,38,.4)]',
  secondary: 'bg-transparent text-body border border-line-strong hover:bg-white/[.06] hover:text-ink',
  ghost: 'bg-transparent text-body hover:bg-white/[.06] hover:text-ink',
}

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-4 text-[13px]',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-7 text-[15px]',
}

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  icon?: React.ReactNode
  className?: string
  children: React.ReactNode
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  icon,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)
  const inner = (
    <>
      <span>{children}</span>
      {icon}
    </>
  )

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    )
  }
  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    )
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  )
}

/* ---- Eyebrow: numbered, uppercase, lime ---- */
export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('eyebrow flex items-center gap-2', className)}>
      {index && <span className="font-mono">{index}</span>}
      {index && <span aria-hidden className="text-lime-400/50">—</span>}
      <span>{children}</span>
    </div>
  )
}

/* ---- Divider: 1px at 10% ---- */
export function Divider({ className }: { className?: string }) {
  return <div className={cn('h-px w-full bg-line-divider', className)} />
}

/* ---- Card ---- */
type CardVariant = 'glass' | 'flat' | 'outline'

const cardVariants: Record<CardVariant, string> = {
  glass: 'surface-glass border border-line-hairline',
  flat: 'surface-flat border border-line-hairline',
  outline: 'bg-transparent border border-line-hairline',
}

export function Card({
  variant = 'glass',
  glow = false,
  interactive = false,
  className,
  children,
  ...rest
}: {
  variant?: CardVariant
  glow?: boolean
  interactive?: boolean
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl',
        cardVariants[variant],
        glow && 'border-line-accent shadow-glow-accent',
        interactive &&
          'transition-[transform,border-color] duration-200 ease-obsidian-out hover:-translate-y-0.5 hover:border-line-strong',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

/* ---- Badge / Tag ---- */
export function Tag({
  children,
  tone = 'neutral',
  dot = false,
  className,
}: {
  children: React.ReactNode
  tone?: 'neutral' | 'lime'
  dot?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs',
        tone === 'lime'
          ? 'border-line-accent text-lime-400'
          : 'border-line-hairline text-body',
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            tone === 'lime' ? 'bg-lime-400' : 'bg-faint',
          )}
        />
      )}
      {children}
    </span>
  )
}

/* ---- Metric ---- */
export function Metric({
  value,
  label,
  className,
}: {
  value: React.ReactNode
  label: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col', className)}>
      <span className="tabular text-[40px] font-medium leading-none text-ink">{value}</span>
      <span className="mt-2 text-[13px] text-faint">{label}</span>
    </div>
  )
}

/* ---- Feature tile: 36px rounded-8 lime-tint square ---- */
export function FeatureTile({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-lg text-lime-400"
      style={{ background: 'var(--lime-tint-08)', border: '1px solid var(--border-accent)' }}
    >
      {children}
    </div>
  )
}

/* ---- Input ---- */
export const TextInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'flex h-11 w-full rounded-lg border border-line-hairline px-4 text-sm text-ink surface-flat',
      'placeholder:text-faint transition-[border-color,box-shadow] duration-200 ease-obsidian-out',
      'focus:outline-none focus:border-line-accent focus:ring-[3px] focus:ring-[rgba(204,255,0,.25)]',
      className,
    )}
    {...props}
  />
))
TextInput.displayName = 'TextInput'
