import { cn } from '@/lib/utils'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  as: Tag = 'h2',
  className,
}) {
  const centered = align === 'center'
  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Reveal>
          <p className={cn('eyebrow mb-5 flex items-center gap-4', centered && 'justify-center')}>
            <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <Tag className="display-lg text-ivory">{title}</Tag>
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base text-mist md:text-lg">{body}</p>
        </Reveal>
      )}
    </div>
  )
}
