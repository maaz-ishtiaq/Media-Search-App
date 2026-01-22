import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  
 
  return (
    <div className='flex justify-between px-[5vw] align-center py-4 w-full bg-blue-950 '>
       <div><h2 className='text-white bold text-xl sm[max-width:600px]:text-sm' >UnPexels</h2></div> 
       <div>
      
        <button
        className='text-white px-4 py-2 text-center rounded bg-blue-700 active:scale-95 mr-4'>
        <Link to='/collection'>Collection</Link>
        </button>
   
        <button 
        className='text-white px-4 py-2 rounded bg-blue-700 active:scale-95'> 
        <Link to='/'>Search</Link >
        </button>
       </div>

    </div>
  )
}

export default Navbar