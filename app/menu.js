import React from 'react'
import styles from '../styles/menu.module.css'

export default function Menu(props) {
  return (
   <ul className={' lg:w-[40%] lg:left-[-45%] md:w-[50%] md:left-[-55%] sm:w-[50%] sm:left-[-55%]  max-sm:w-full max-sm:left-[-100%] menu'}ref={props.menu}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        

   </ul>
  )
}
