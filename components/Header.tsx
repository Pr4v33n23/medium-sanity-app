import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/medium-logo.jpg'

export const Header: React.FC = () => {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/post">
          <a>
            <Image
              className="cursor-pointer object-contain"
              src={logo}
              alt="medium logo"
              width={200}
              height={50}
            />
          </a>
        </Link>
        <div className="hidden items-center space-x-5 text-gray-800 hover:text-black md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full border bg-green-600 py-1 px-4 text-white">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600 hover:text-green-700">
        <h3>Sign in</h3>
        <h3 className="rounded-full border border-green-600 py-1 px-4">
          Get Started
        </h3>
      </div>
    </header>
  )
}
