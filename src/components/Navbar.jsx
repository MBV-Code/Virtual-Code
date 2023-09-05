import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Logo } from './Logo'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Sale', path: '/sale' },
  { name: 'Course', path: '/course' }
]

export function Navbar () {
  const [isOpen, setIsOpen] = useState(true)
  const showClass = isOpen ? 'translate-x-0' : '-translate-x-full'

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='w-3 h-3 fixed top-3 left-3 z-10'>
        <Logo className='w-20 sm:w-auto' />
      </button>

      <nav className={`grid fixed top-0 left-0 z-10 w-64 h-screen transition-transform ${showClass}`}>
        <div className='h-full px-3 py-4 overflow-y-auto dark:bg-zinc-950'>
          <button onClick={() => setIsOpen(!isOpen)} className='w-full flex justify-center mb-5'>
            <Logo />
          </button>
          <ul className='space-y-2 font-medium'>
            {links.map(({ name, path }, index) => (
              <li key={index}>
                <Link to={path} className='flex items-center justify-center p-2 rounded-lg dark:text-white dark:hover:bg-zinc-500'>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='grid place-content-center justify-center dark:bg-zinc-950'>
          <button>React</button>
        </div>
      </nav>
    </>
  )
}
