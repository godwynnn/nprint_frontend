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


const header_images=[
  {
    id:1,
    src:require('../images/head_6.jpeg'),
  },
  {
    id:2,
    src:require('../images/head_7.png'),
  },
  {
    id:3,
    src:require('../images/head_6.jpeg'),
  },
  {
    id:4,
    src:require('../images/head_7.png'),
  }
]


// const header_images=[
//   {
//     id:1,
//     src:require('../images/3D1.png'),
//   },
//   {
//     id:2,
//     src:require('../images/3D2.png'),
//   },
//   {
//     id:3,
//     src:require('../images/3D3.png'),
//   },
//   {
//     id:4,
//     src:require('../images/3D1.png'),
//   }
// ]


export default function Home() {
  const animation = { duration: 40000, easing: (t) => t }
  const[looping,setLoop]=useState(true)
  const headerSlideRef=useRef()

  

  
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag:false,
    
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
            {
              header_images.map((image,index)=>(
                  <div ref={headerSlideRef} key={index} className="keen-slider__slide number-slide1" >
                  <Image src={image.src} alt="" className='head_slide_img' />
              </div>
              ))
            }
            
          </div>


          
        </div>


      </header>



    {/* SECTION 1 */}
      <section  className={styles.section_1}>
       
      <p>Africa's No1 3D Printing Agency</p>
        <div className=' w-4/5 h-96  flex'>
          <div className=' w-2/4 h-full flex items-center justify-center'>
            <Image src={require('../images/3D7.png')} className='h-3/4 w-2/4'/>

          </div>

          <div className='w-4/5 h-full'>
            
            <p>With over 30 years of combined Rapid Prototyping experience, you can rest assured that Imaginarium can meet your needs. We believe in the highest calibre of service and adapt to the needs of each individual client. We listen, we internalize, we’re responsive, and we deliver projects on-time.</p>
          </div>

        </div>

      </section>



    {/* SECTION 2*/}
      <section className={`${styles.section_2} flex  flex-col items-center justify-center p-12`}>

        <p>EXPLORE OUR UNMATCHED SERVICES</p>

        <div className='h-3/5 w-3/5 flex-row relative  mt-14'>

            <div className=' h-2/4 w-1/4 rounded-lg absolute top-14   -left-36  ' >
              <Image src={require('../images/head_7.png')} className='h-full rounded-lg '/>

              
            </div>

            <div className=' h-full w-full rounded-lg  bg-white flex flex-col justify-center items-center p-20 '>

              <p className=' text-black text-lg '>
                  We provide prototypes to an assortment of industries from jewellery, engineering, automotive, architecture, consumer goods, etc. With our diverse range of state-of-the-art equipment, we offer customers complete solutions.

                </p>
                
            </div>

          </div>
            
      </section>
    </main>
  );
}
