import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ w, h }: { w: number; h: number }) => {
  return (
        <Image src={'/images/logo.png'} className='left-0 relative mr-8' width={w} height={h} alt='brand'/>
  )
}

export default Logo