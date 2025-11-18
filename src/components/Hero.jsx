import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.12),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-medium text-yellow-300 backdrop-blur"
        >
          <span>supercharged</span>
          <span className="opacity-60">•</span>
          <span>Dark mode, yellow spark</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          The last doomscroll you'll ever do.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-5 max-w-2xl text-base text-zinc-300 sm:text-lg"
        >
          Meet supercharged — a playful challenge wrapped in a focused feed. Sign the oath, ditch the doom, and turn your swipes into progress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#oath"
            className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3 text-black shadow-[0_0_25px_rgba(250,204,21,0.3)] transition hover:shadow-[0_0_35px_rgba(250,204,21,0.5)]"
          >
            <span className="font-semibold">Sign the Oath</span>
            <svg className="h-5 w-5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>

          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-yellow-300/30 bg-white/5 px-6 py-3 text-yellow-200 backdrop-blur transition hover:bg-white/10"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
