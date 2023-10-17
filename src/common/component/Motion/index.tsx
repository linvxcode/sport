'use client'
import {motion} from 'framer-motion'
export const Motion = ({children}: any) => {
  return (
    <motion.div 
    initial={{scale: 0.9}}
    animate={{scale:1, transition: {type: "spring", duration: 2, repeat: Infinity,
    repeatType: "reverse",}}}
    >
     {children} 
    </motion.div>
  )
}
