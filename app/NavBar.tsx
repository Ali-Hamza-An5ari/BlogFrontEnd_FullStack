//making this as client component 
//because need to fetch data and any 
//event or action can only be performed in client component
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { ImBlog } from "react-icons/im";
import classnames from 'classnames'

const NavBar = () => {

    //Hook gets current path. so we can use this for apply styling on it
    const currentPath = usePathname();
    console.log(currentPath)
    const links=[
        {name:'Home', path:'/'},
        {name:'Dashboard', path:'/Dashboard'},
        {name:'Blogs', path:'/blogs'},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><ImBlog /></Link>
        <ul className='flex space-x-6'>
            {links.map((link) => 
                
                <Link 
                key={link.path}
                //manually adding css by string manipulation
                // className={`${link.path===currentPath ? 'text-zinc-900':'text-zinc-600'} hover:text-zinc-400 transition-colors`} href={link.path}>
                
                //now applying class dynamically
                className={
                    //classnames package will get condition for class rendering
                    //and return the class string for styling and we do not need to manipulate strings
                    classnames(
                        {
                            'text-blue-900': link.path===currentPath,
                            'text-zinc-600': link.path!==currentPath,
                            'hover:text-zinc-400': true,
                            'transition-colors': true,
                        })
                } href={link.path}>
                    {link.name}
                </Link>)
            }
            
        </ul>
    </nav>
  )
}

export default NavBar