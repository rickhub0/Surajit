import { motion } from 'framer-motion'

export default function LoaderScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.65 } }}
    >
      <div className="relative h-24 w-24">
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-400/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-3 rounded-full border border-purple-400/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.35em] text-slate-300">Initializing Portfolio</p>
    </motion.div>
  )
}
