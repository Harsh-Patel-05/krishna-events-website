import { cn } from '@/lib/utils'

/** Soft glow using peacock brand blues */
export function PeacockGlow({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn('peacock-glow absolute rounded-full blur-3xl', className)}
    />
  )
}

/** Decorative feather mark — peacock blue, emerald, champagne gold */
export function FeatherMark({ className }) {
  return (
    <svg
      viewBox="0 0 40 56"
      className={cn('text-peacock', className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 54C20 54 8 40 8 24C8 12 14 4 20 2C26 4 32 12 32 24C32 40 20 54 20 54Z"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.9"
      />
      <circle cx="20" cy="18" r="5.5" fill="#176D88" />
      <circle cx="20" cy="18" r="3.4" fill="#247D68" />
      <circle cx="20" cy="18" r="1.6" fill="#C5A15B" />
      <path
        d="M20 24V50"
        stroke="#247D68"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  )
}
