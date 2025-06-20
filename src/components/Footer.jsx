import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className="screen-max-width">
            <div>
                <p className='font-semibold text-gray tex-xs'>
                    More ways to buy:{''}
                    <span className="underline text-blue">
                    Find an Apple Store{''}
                    </span>
                    or{' '}
                    <span className="underline text-blue">
                    other retailer
                    </span>{''}
                </p>
                <p className='font-semibold text-gray tex-xs'>
                    Or call 1-800-MY-APPLE.
                </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px] w-full'/>
            <div className='flex md:flex-row flex-col md:items-center justify-between'>
            <p className='font-semibold text-gray tex-xs'>
            Copyright © 2025 Apple Inc. All rights reserved.
            </p>
            <div className='flex'>
                {footerLinks.map((link,i)=>(
                    <p className='font-semibold text-gray tex-xs'>
                    {link}{' '}
                    {i!==footerLinks.length-1&&(
                        <span className='mx-2'> | </span>
                    )}
                    </p>
                ))}
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
