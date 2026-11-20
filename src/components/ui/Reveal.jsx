import { motion } from 'framer-motion'
import { fadeUp, still, viewport } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/** Scroll-reveal wrapper that respects prefers-reduced-motion. */
export default function Reveal({ children, delay = 0, distance = 28, as = 'div', className, ...props }) {
  const reduced = useReducedMotion()
  const Component = motion[as] ?? motion.div
  return (
    <Component
      className={className}
      variants={reduced ? still : fadeUp(delay, distance)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...props}
    >
      {children}
    </Component>
  )
}
