import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function CustomCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const x = useSpring(mouseX, { stiffness: 550, damping: 36 })
  const y = useSpring(mouseY, { stiffness: 550, damping: 36 })

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return

    const onMove = (event) => {
      mouseX.set(event.clientX - 12)
      mouseY.set(event.clientY - 12)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-6 w-6 rounded-full border border-cyan-300/80 bg-cyan-300/20 md:block"
        style={{ x, y }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[119] hidden h-11 w-11 rounded-full border border-white/20 md:block"
        style={{ x: useSpring(mouseX, { stiffness: 260, damping: 28 }), y: useSpring(mouseY, { stiffness: 260, damping: 28 }) }}
      />
    </>
  )
}
