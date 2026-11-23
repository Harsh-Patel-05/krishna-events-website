import { cn } from '@/lib/utils'

/** Logo-style divider: ── EVENTS ── */
export default function BrandRule({ children = 'Events', className }) {
  return <span className={cn('brand-rule', className)}>{children}</span>
}
