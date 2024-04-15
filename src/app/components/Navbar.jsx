import React from 'react'
import NavItem from '@/app/components/NavItem'

function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
        <NavItem title='Trending' param = 'fetchTrending'/>
        <NavItem title='TopRated' param = 'fetchTopRated'/>
    </div>
  )
}

export default Navbar