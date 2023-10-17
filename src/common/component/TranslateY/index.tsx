'use client'
import {motion} from 'framer-motion'
export const TranslateY = ({child} : any) => {
  return (
    <motion.div 
    initial={{ translateY: 10}}
    animate={{ translateY: 0, transition: {type: "spring", duration: 2}}}
    > 

      {child}
    </motion.div>
  )
}

