import React from 'react'
import Image from 'next/image'
import logo from '../public/icons/logo.svg'

const Logo = () => {
  return (
    <div className=" h-16  justify-start items-center gap-4 inline-flex">
            <Image src={logo} height={36} alt="kanban" className="" />
          <div className="text-deep_gray dark:text-white text-large font-bold font-saira leading-9 tracking-wider ">
            kanban
          </div>
        </div>
  )
}

export default Logo