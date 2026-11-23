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
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Reveal>
          <p className={cn('eyebrow mb-5', centered && 'justify-center')}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <Tag className="display-lg">{title}</Tag>
      </Reveal>
      {body && (
        <Reveal delay={0.12}>
          <p className={cn('lede mt-5 max-w-xl', centered && 'mx-auto')}>{body}</p>
        </Reveal>
      )}
    </div>
  )
}
