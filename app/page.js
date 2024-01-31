"use client"

// import Image from "next/image";
import styles from '../styles/page.module.css'
import '../styles/page.module.css'
import Menu from './menu';
import  headimg_1 from '../images/head_4.png'
import Image from 'next/image';
import { FontawesomeObject } from '@fortawesome/fontawesome';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef, useState,useEffect } from 'react';



export default function Home() {
  const animation = { duration: 40000, easing: (t) => t }
  const[looping,setLoop]=useState(true)
  const headerSlideRef=useRef()

  

  
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag:true,
    
    slides: {
      origin: "center",
      perView: 2,
      spacing: 40,
    },
    // vertical: true,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })



    // useEffect(()=>{

   
    // },[])

  return (
    <main className={styles.main}>
      <header className={styles.header}>


        <div className={styles.sub_header_1}>
          <p>WE ARE <span> 3 DIMENSIONAL</span> </p>
          <p>Africa's 1st 3D Print On Demand Agency</p>

        </div>

        <div  className={styles.sub_header_2}>
          <div ref={sliderRef} className="keen-slider">
              <div ref={headerSlideRef} className="keen-slider__slide number-slide1" >
                <Image src={require('../images/head_6.jpeg')} alt="" className='head_slide_img' />
              </div>


          
              <div ref={headerSlideRef} className="keen-slider__slide number-slide1" >
                <Image src={require('../images/head_7.png')} alt="" className='head_slide_img' />
              </div>


              <div ref={headerSlideRef} className="keen-slider__slide number-slide1" >
                <Image src={require('../images/head_6.jpeg')} alt="" className='head_slide_img' />
              </div>


              <div ref={headerSlideRef} className="keen-slider__slide number-slide1" >
                <Image src={require('../images/head_7.png')} alt="" className='head_slide_img' />
              </div>
          </div>
        </div>


      </header>



    {/* SECTION 1 */}
      <section  className={styles.section_1}>
        <p>Africa's No1 3D Printing Agency</p>
        <p>With over 30 years of combined Rapid Prototyping experience, you can rest assured that Imaginarium can meet your needs. <br /> We believe in the highest calibre of service and adapt to the needs of each individual client. We listen, we internalize, we’re responsive, and we deliver projects on-time.</p>

      </section>



    {/* SECTION 2*/}
      <section className={styles.section_2}>
            <div >

            </div>

            <div >
              
            </div>
      </section>
    </main>
  );
}
