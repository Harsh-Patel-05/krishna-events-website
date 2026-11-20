import { Link } from 'react-router-dom'
import { cva } from 'class-variance-authority'
import { cn, isExternal } from '@/lib/utils'

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-sans font-medium uppercase tracking-[0.18em] transition-all duration-500 ease-luxe select-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        gold: 'bg-gold text-ink hover:bg-gold-soft hover:shadow-gold',
        peacock: 'bg-peacock text-ivory hover:bg-peacock-soft hover:text-ink hover:shadow-peacock',
        outline:
          'border border-gold/60 text-ivory hover:border-gold hover:bg-gold hover:text-ink',
        ghost: 'text-ivory hover:text-gold',
        whatsapp: 'bg-whatsapp text-ink hover:brightness-110',
      },
      size: {
        sm: 'min-h-11 px-5 text-[0.7rem]',
        md: 'min-h-12 px-7 text-[0.74rem]',
        lg: 'min-h-14 px-9 text-[0.78rem]',
      },
    },
    defaultVariants: { variant: 'gold', size: 'md' },
  },
)

/**
 * Button supports three render modes:
 *  - `to`   → react-router <Link> for internal routes
 *  - `href` → <a> (external links open in a new tab)
 *  - none   → <button>
 */
export default function Button({
  to,
  href,
  variant,
  size,
  className,
  children,
  external,
  ...props
}) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    const ext = external ?? (isExternal(href) && /^https?:/i.test(href))
    return (
      <a
        href={href}
        className={classes}
        {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

export { buttonVariants }
