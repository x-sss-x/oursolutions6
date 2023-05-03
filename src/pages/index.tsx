import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <ul></ul><h1 className='text-xl font-bold font-sans'>OurSolutions<br/>
    (multiservices)
    </h1><ul/>
    </main>
  )
}
