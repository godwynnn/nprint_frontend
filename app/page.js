"use client"

// import Image from "next/image";
import styles from '../styles/page.module.css'
// import '../styles/page.module.css'
import Menu from './menu';
import headimg_1 from '../images/head_4.png'
import Image from 'next/image';
import { FontawesomeObject } from '@fortawesome/fontawesome';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';


const header_images = [
  {
    id: 1,
    src: require('../images/head_6.jpeg'),
  },
  {
    id: 2,
    src: require('../images/head_7.png'),
  },
  {
    id: 3,
    src: require('../images/head_6.jpeg'),
  },
  {
    id: 4,
    src: require('../images/head_7.png'),
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
  const [looping, setLoop] = useState(true)
  const headerSlideRef = useRef()




  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,

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
          {/* <p>Africa's 1st 3D Print On Demand Agency</p> */}
          <p>WE ARE <br /><span>3DIMENSIONAL</span> </p>


        </div>

        <div className={styles.sub_header_2}>


          <div>
            <Image src={require('../images/3D6.png')} alt="" />
          </div>

          {/* <div>
              <p>WE WILL MAKE YOU A BRAND</p>
              <p>You are assured that Nprint can meet your needs. We believe in the highest calibre of service and adapt to the needs of each individual client.We listen, we internalize, we’re responsive, and we deliver projects on-time.</p>

          </div> */}



        </div>


      </header>

      <section className={`${styles.features}`}>

        <div className="feature">
          <FontAwesomeIcon icon={faGlobeAfrica} className='feature_icon'/>
          <div className="desc">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum voluptates nihil?</p>
          </div>
        </div>


        <div className="feature">
          <FontAwesomeIcon icon={faGlobeAfrica} className='feature_icon'/>
          <div className="desc">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum voluptates nihil?</p>
          </div>
        </div>


        <div className="feature">
          <FontAwesomeIcon icon={faGlobeAfrica} className='feature_icon'/>
          <div className="desc">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum voluptates nihil?</p>
          </div>
        </div>
        
      </section>


      {/* SECTION 1 */}

      <section className={styles.section_1}>


        <div>
          <p>About us</p>
          <p>we will make you a brand</p>
          <p>We provide prototypes to an assortment of industries from jewellery, engineering, automotive, architecture, consumer goods, etc. With our diverse range of state-of-the-art equipment, we offer customers complete solutions.
          </p>
        </div>

        <div className={`${styles.section_1_sub_section} w-3/5 h-96  flex`}>
          <Image src={require('../images/section_12.webp')} />


        </div>







        <div class="wave1">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>



        <div class="wave2">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
          </svg>
        </div>
      </section>



      {/* SECTION 2*/}
      <section className={`${styles.section_2} flex  flex-col items-center justify-center p-12`}>

        <p>EXPLORE OUR UNMATCHED SERVICES</p>

        <div className='h-3/5 w-3/5 flex-row relative  mt-14'>

          <div className=' h-2/4 w-1/4 rounded-lg absolute top-14   -left-36  ' >
            <Image src={require('../images/head_7.png')} className='h-full rounded-lg ' />


          </div>

          <div className=' h-full w-full rounded-lg  bg-white flex flex-col justify-center items-center p-20 '>

            <p className=' text-black text-lg '>
              We provide prototypes to an assortment of industries from jewellery, engineering, automotive, architecture, consumer goods, etc. With our diverse range of state-of-the-art equipment, we offer customers complete solutions.

            </p>

          </div>

        </div>

      </section>


      <section className={styles.section_3}>

      </section>
    </main>
  );
}
