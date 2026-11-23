export const ease = [0.22, 1, 0.36, 1]

export const fadeUp = (delay = 0, distance = 20) => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease, delay } },
})

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.55, ease, delay } },
})

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const viewport = { once: true, margin: '0px 0px -10% 0px', amount: 0.15 }

/** Variants that collapse to no-motion when the user prefers reduced motion. */
export const still = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0 } },
}
