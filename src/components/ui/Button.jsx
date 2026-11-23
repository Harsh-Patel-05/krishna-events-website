import { Link } from 'react-router-dom'
import { cva } from 'class-variance-authority'
import { cn, isExternal } from '@/lib/utils'

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap font-sans font-medium tracking-[0.1em] uppercase transition-all duration-400 select-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        gold:
          'bg-gold text-ink hover:bg-gold-soft hover:shadow-gold active:translate-y-px',
        peacock:
          'bg-peacock text-ivory hover:bg-peacock-soft hover:text-ink hover:shadow-peacock',
        ivory:
          'bg-ivory text-ink hover:bg-warm-ivory',
        outline:
          'border border-white/35 text-white hover:border-gold hover:text-gold bg-transparent',
        'outline-gold':
          'border border-gold/55 text-gold hover:bg-gold hover:text-ink',
        ghost:
          'text-ivory tracking-[0.14em] hover:text-gold px-0',
        whatsapp:
          'bg-whatsapp text-ink normal-case tracking-normal hover:brightness-110',
      },
      size: {
        sm: 'min-h-10 px-5 text-[0.66rem]',
        md: 'min-h-11 px-6 text-[0.68rem]',
        lg: 'min-h-[3.15rem] px-8 text-[0.7rem]',
      },
    },
    defaultVariants: { variant: 'gold', size: 'md' },
  },
)

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
