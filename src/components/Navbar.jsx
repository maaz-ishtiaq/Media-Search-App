import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-4 sm:px-8 py-4 w-full bg-blue-950'>
      <div>
        <h2 className='text-white font-bold text-lg sm:text-xl'>UnPexels</h2>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          to='/collection'
          className='text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-center rounded bg-blue-700 active:scale-95 transition-transform'
        >
          Collection
        </Link>
        <Link
          to='/'
          className='text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-center rounded bg-blue-700 active:scale-95 transition-transform'
        >
          Search
        </Link>
      </div>
    </div>
  )
}

export default Navbar
