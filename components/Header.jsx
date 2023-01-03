import React, { useContext } from 'react'

import Link from 'next/link'

const categories = [ {name : 'react', slug: 'react'}, { name: 'web dev', slug: 'web-dev'}]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>Header
    <div className=' border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
            <Link href='/'>
                <span className='cursor-pointer font-bold text-4xl text-white'>
                    Turbo Gordz Blog
                </span>
            </Link>
<div className='hidden md:float-left md:contents'>
    {}
</div>
        </div>

    </div>


    </div>
  )
}

export default Header