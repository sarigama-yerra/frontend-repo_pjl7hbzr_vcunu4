import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-center text-zinc-500">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-zinc-400">supercharged — quit doomscrolling, keep the spark.</p>
        <p className="mt-2 text-xs">© {new Date().getFullYear()} Supercharged Labs • All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
