import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full border-b-2 border-violet-600">
        <Link to="/">
            BudgetProj.
        </Link>
        <div>
            <Link to="/login">
                <button className='bg-violet-700 mr-4 p-3 text-white rounded-xl text-base'>
                    Sign In
                </button>
            </Link>
            <Link to="/register"><button className='bg-violet-700 p-3 text-base text-white rounded-xl'>
                    Sign Up
                </button></Link>
        </div>
        
    </div>
  )
}

export default Navbar