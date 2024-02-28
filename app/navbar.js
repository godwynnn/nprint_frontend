"use client"
import React,{useRef} from 'react'
import styles from '../styles/nav.module.css'
// import Document from 'next/document'
import Menu from './menu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    

    // HAMBUGER TOGGLE SCRIPT
    const toggle=useRef('')
    const menu=useRef('')

    const Toggle=()=>{
        toggle.current.classList.toggle('active')
        menu.current.classList.toggle('active')
    }



  return (
    <>
    <nav className={styles.nav}>
        <ul className='lg:flex-row'>
            <li className='toggle' id='toggle' onClick={Toggle} ref={toggle}>
                <hr />
            </li>

            <li>
                NPRINT
            </li>

            <li>

                <FontAwesomeIcon icon={faMagnifyingGlass} className={` text-white lg:text-white md:text-black ${styles.search_icon}`}/>

            </li>
        </ul>

        
    </nav>


    <Menu  menu={menu}/>
          
    </>
    
  )


}
