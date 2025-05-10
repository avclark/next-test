'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const items = [
  { title: 'Fast Setup', description: 'Tailwind + Headless UI in minutes.' },
  { title: 'Smooth Animations', description: 'Powered by tailwindcss-animate.' },
  { title: 'Ready for Production', description: 'Deploy to Vercel with a click.' },
]

export default function HomePage() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-white">🚀 Next.js + Tailwind Playground</h1>

      <div className="grid gap-6 w-full max-w-xl">
        {items.map((item, i) => (
          <Transition
            key={item.title}
            appear
            show={show}
            enter="transition-all duration-700 delay-[200ms] data-[index]:delay-[100ms]"
            enterFrom="opacity-0 translate-y-8 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
          >
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/80 p-6 ring-1 ring-white/10 hover:ring-white/20 transition">
              <div className="flex items-center gap-4">
                <CheckCircleIcon className="h-8 w-8 text-green-400" />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          </Transition>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500">
        If you see this working, Tailwind, Animate, and Vercel are all good to go ✅
      </p>
    </main>
  )
}