import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2 mr-3 md:mr-0'>
        <Image src={'/logo3.PNG'} width={100} height={80} alt='brand'/>
        
    </Link>
  )
}

export default Logo