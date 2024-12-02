"use client"

import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/Transparent Logo 1.png'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter();

  const handleLogo = () =>{
    router.push('/');
  }

  return (
    <div className='h-[80px] bg-[#543D4D] w-full '>
      <div className='flex justify-between items-center h-full px-5  lg:px-[100px] '>
          <Image src={logo} alt=''onClick={handleLogo} className='cursor-pointer'/>
          <div className='flex justify-end items-center gap-8'>
            <div className='text-white font-normal text-[16px] cursor-pointer hover:text-zinc-300'>Sign in</div>
            <div className='text-white font-normal text-[16px] cursor-pointer hover:text-zinc-300'>Register</div>
            {/* <CustomButton/>
            <CustomButton/> */}
            <Button variant='default' className='text-[16px]' >Find a course</Button>
            <Button variant='default' className='text-[16px] font-ubuntu'>Get verified</Button>
            
          </div>
      </div>
    </div>
  )
}

export default Header