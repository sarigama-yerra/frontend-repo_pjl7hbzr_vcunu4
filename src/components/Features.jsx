import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Laser-focused, productive and addictive feed',
    desc: 'A feed engineered to reinforce learning, output and momentum — not anxiety. Micro-wins, streaks and positive loops keep you coming back for the right reasons.',
  },
  {
    title: 'Challenge your friends',
    desc: 'Send playful dares, head-to-head sprints and team challenges. Friendly pressure, real rewards and zero doom.',
  },
  {
    title: 'Share your progress',
    desc: 'Post your non‑doom scroll activities. Celebrate reading, creating, building and exploring — and inspire your circle to do the same.',
  },
  {
    title: 'Feel the benefit',
    desc: 'Log increased focus, improved mood and enhanced knowledge. Watch your time compound into something you’re proud of.',
  },
]

function Features() {
  return (
    <section id="features" className="relative z-10 w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Why supercharged works
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-yellow-400/20 bg-zinc-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <h3 className="text-lg font-semibold text-yellow-300">{f.title}</h3>
              <p className="mt-2 text-zinc-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
