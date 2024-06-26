import React from 'react'
import Link from 'next/link'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsInfoCircleFill } from 'react-icons/bs'
import DarkModeSwitch from './DarkModeSwitch'
function Header() {
    return (
        <div className='flex justify-between  p-3 items-center max-w-6xl mx-auto '>
            <div className='flex gap-4'>
                <MenuItem title='home' address='/' Icon={AiFillHome} />
                <MenuItem title='about' address='/about' Icon={BsInfoCircleFill} />
            </div>
            <div className='flex gap-2 items-center'>
                <DarkModeSwitch/>
            <Link className='flex gap-1 items-center' href={'/'}>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
                <span className='text-xl hidden sm:inline'>clone</span>
            </Link>
            </div>
            
        </div>
    )
}

export default Header