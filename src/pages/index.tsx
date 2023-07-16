import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className='w-full h-full flex grow flex-col'
    >
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
