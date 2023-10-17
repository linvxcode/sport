'use client'
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

export const Mobile = () => {
  return (
    <AnimatePresence>
    <motion.div 
    initial={{translateY: 50, opacity: 0}}
    whileInView={{ translateY:0, opacity: 1, transition: {type: "spring", duration: 2}}}
    >
      <div className='flex justify-center items-center'>
        <h1 className='text-7xl text-center'>
            Coming Soon..!
        </h1>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}
