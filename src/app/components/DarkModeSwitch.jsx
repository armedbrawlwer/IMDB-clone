// rhis is client side as we have to use a hook to determinne if the system is in dark or light mode

'use client'
import React from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme()
    const currTheme = theme === 'system' ? systemTheme : theme
    return (
        <div>{
            currTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500' /> :
                <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500' />}</div>
    );
}

export default DarkModeSwitch