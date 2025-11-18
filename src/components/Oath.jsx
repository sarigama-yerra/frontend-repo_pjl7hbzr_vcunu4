import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Oath() {
  const [signed, setSigned] = useState(false)

  return (
    <section id="oath" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(250,204,21,0.12),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(250,204,21,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          The Supercharged Oath
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-center text-zinc-300"
        >
          I challenge you. Today I choose curiosity over doom. I’ll replace mindless scrolls with meaningful actions, one focused swipe at a time.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 rounded-2xl border border-yellow-400/20 bg-zinc-900/60 p-6"
          onSubmit={(e) => {
            e.preventDefault()
            setSigned(true)
          }}
        >
          <label className="block text-sm font-medium text-yellow-200">Write your name to sign</label>
          <input
            required
            type="text"
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-yellow-400/20 bg-black/60 px-4 py-3 text-white placeholder-zinc-500 outline-none ring-0 focus:border-yellow-400/40"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black shadow-[0_0_25px_rgba(250,204,21,0.25)] transition hover:shadow-[0_0_35px_rgba(250,204,21,0.45)]"
          >
            {signed ? 'Oath Signed — Get the App' : 'Sign the Oath & Get the App'}
          </button>

          <p className="mt-3 text-center text-xs text-zinc-400">By signing, you join the challenge to quit doomscrolling.</p>
        </motion.form>
      </div>
    </section>
  )
}

export default Oath
