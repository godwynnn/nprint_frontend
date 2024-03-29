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
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

// KEEN SLIDER
import slider from '@/src/slider';

// GSAP
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect,useEffect } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // import required modules
// import { Pagination, Autoplay } from 'swiper/modules';
// import { Suspense } from 'react';




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
  const [slide_loaded,setSlideLoaded]=useState(false)
  const headerSlideRef = useRef()
  const head_img1=useRef()
  const sect_1_img_holder=useRef()
  const sect_1_img=useRef()
  const sect_1_txt=useRef()
  const desc_container=useRef()
  const splash_ref=useRef()
  const operation_ref1=useRef()
  const operation_ref2=useRef()




  const [sliderRef1] = useKeenSlider({
    initial:0,
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


  const [sliderRef2] = useKeenSlider(
    {
      loop: true,
      
     
    },
    


    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
         
            setSlideLoaded(true)
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )




  useEffect(()=>{

    setSlideLoaded(true)
  },[])
  gsap.registerPlugin(ScrollTrigger)


  useGSAP(()=>{
    gsap.from(head_img1.current,{
      
      scrollTrigger:{
        trigger:'.header_img_holder',
        start:'-0.5%top top',
        end:'10%top 5%top',
        // markers:true,
        // scrub:2,
        
      marker:true,
      },
      y:'100%',
      // height:1,
      
      // opacity:'0',
      // stagger:0.1,
      duration:2,
      animation:'ease',
      borderBottomLeftRadius:'50%',
      borderBottomRightRadius:'50%'
    
    })

    gsap.from(sect_1_img_holder.current,{
      scrollTrigger:{
        trigger:sect_1_img_holder.current,
        start:'5%top top',
        end:'10%top 5%top',
        // markers:true,
        // scrub:5,
      },
      width:'0%',
      padding:'0%',
      
      duration:1.5,
      ease:"elastic",
      
    })

    
  
    gsap.from(sect_1_img.current,{
      scrollTrigger:{
        trigger:sect_1_img_holder.current,
        start:'5%top top',
        end:'10%top 5%top',
        // markers:true,


      },
      x:'20%',
      opacity:0,
      delay:2,
      duration:1,
      animation:'ease'
    })

    gsap.from(sect_1_txt.current,{
      scrollTrigger:{
        trigger:sect_1_img_holder.current,
        start:'5%top top',
        end:'10%top 5%top',
        // markers:true,
      },
      x:'-5%',
      opacity:0,
      delay:1,
      duration:1,
      ease:"power3",

    })

    gsap.from('.feature',{
      scrollTrigger:{
        trigger:desc_container.current,
        start:'5%top top',
        end:'10%top 5%top',
        // markers:true,
      },
      scale:0,
      duration:1,
      ease:"bounce.in",
      yoyo:true,
      stagger:{
        each:0.2
      }


    })

    gsap.from(operation_ref1.current,{
      scrollTrigger:{
        trigger:operation_ref1.current,
        start:'20%top top',
        end:'10%bottom top',
        // markers:true,
      },
      opacity:0,
      rotate:'-45deg',
      duration:1,
    })

    gsap.from(operation_ref2.current,{
      scrollTrigger:{
        trigger:operation_ref2.current,
        start:'30%top top',
        end:'50%bottom top',
        // markers:true,
      },
      opacity:0,
      x:'20px',
      
      duration:1,
      animation:'ease'
    })


  },[])

  return (
    <main className={styles.main}>
      <header className={`lg:h-[100vh] w-full lg:flex-row max-lg:flex-row md:flex-col md:items-center md:h-[150vh] sm:flex-col  sm:items-center sm:h-[120vh] max-sm:h-[120vh] max-sm:flex-col items-center  ${styles.header}`}>


        <div className={`lg:text-left lg:text-[70px] lg:w-[60%] max-lg:w-[40%] md:w-[100%]  md:text-center md:text-[90px] sm:text-[70px] sm:text-center sm:w-full max-sm:w-full max-sm:text-[50px] max-sm:text-center  ${styles.sub_header_1}`}>
          {/* <p>Africa's 1st 3D Print On Demand Agency</p> */}
          <p>WE ARE <br /><span>3DIMENSIONAL</span> </p>


        </div>

        <div className={`lg:w-[40%] lg:h-full  max-lg:w-[70%]  md:w-[100%] md:h-full sm:w-[100%] sm:h-full max-sm:h-full header_img_holder ${styles.sub_header_2}`} >


          <div ref={head_img1} className='lg:w-[90%] lg:h-full md:h-full sm:h-full sm:w-[60%]'>
            <Image src={require('../images/3D6.png')} alt="" className='w-full h-full lg:w-full lg:h-full md:w-[90%] md:h-[90%] '/>
          </div>

          {/* <div>
              <p>WE WILL MAKE YOU A BRAND</p>
              <p>You are assured that Nprint can meet your needs. We believe in the highest calibre of service and adapt to the needs of each individual client.We listen, we internalize, we’re responsive, and we deliver projects on-time.</p>

          </div> */}



        </div>


      </header>

      <section ref={desc_container} className={`${styles.features} grid lg:grid-cols-4 md:grid-cols-2 `}>

        <div className="feature">
          <FontAwesomeIcon icon={faGlobeAfrica} className='feature_icon' />
          <div className="desc">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum voluptates nihil?</p>
          </div>
        </div>


        <div className="feature">
          <FontAwesomeIcon icon={faGlobeAfrica} className='feature_icon' />
          <div className="desc">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum voluptates nihil?</p>
          </div>
        </div>


        <div className="feature">
          <FontAwesomeIcon icon={faGlobeAfrica} className='feature_icon' />
          <div className="desc">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum voluptates nihil?</p>
          </div>
        </div>


        <div className="feature">
          <FontAwesomeIcon icon={faGlobeAfrica} className='feature_icon' />
          <div className="desc">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum voluptates nihil?</p>
          </div>
        </div>

      </section>


      {/* SECTION 1 */}

      <section className={`${styles.section_1} flex lg:min-h-[140vh] lg:flex-row -translate-y-[2%] md:min-h-[200vh] md:flex-col sm:min-h-[200vh] sm:flex-col max-sm:min-h-[200vh] max-sm:flex-col`}>


        

        <div ref={sect_1_img_holder} className={`${styles.section_1_sub_section} p-[5%] lg:w-[60%] lg:h-[100vh]  md:w-[70%] md:min-h-[60%] md:p-[5%] sm:h-[80vh]`}>
          <Image ref={sect_1_img} src={require('../images/products.png')} />


        </div>


        <div ref={sect_1_txt} className='lg:w-[40%] md:w-[80%]'>
          <p>About us</p>
          <p>we will make you a brand</p>
          <p>We provide prototypes to an assortment of industries from jewellery, engineering, automotive, architecture, consumer goods, etc. With our diverse range of state-of-the-art equipment, we offer customers complete solutions.
          </p>

          <button className='p-2 lg:w-[50%] md:w-[50%] sm:w-[50%] max-sm:w-[50%]'>Explore</button>
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

      {/* OPERATIONS */}

      <section className={`${styles.operation}  lg:h-[120vh] lg:w-[100%] relative`}>

        <div className=' flex lg:h-[80%] lg:w-[100%] lg:flex-row items-center md:flex-col  sm:flex-col max-sm:flex-col'>
          <div ref={operation_ref1} className='flex p-[8%] flex-col items-right justify-center lg:h-[100%] lg:w-[60%] md:h-[40%] '>
            <p>Operational Plan</p>
            <p className='mt-4'>Utilizing cutting-edge 3D
              printing technology and regularly
              upgrading to stay at the forefront
              of innovation.Assembling a skilled team with
              expeɠise in 3D modeling,
              printing, and post-processing
              techniques.</p>

          </div>

          <Image ref={operation_ref2} className=' lg:w-[30%] md:w-[50%] sm:w-[60%] max-sm:w-[60%]' src={require('../images/machine.png')} />

        </div>

        <div className="wave3">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>



      {/* SECTION 2*/}
      <section className={`${styles.section_2} flex  flex-col  p-12 lg:h-[150vh] sm:h-[180vh]  max-sm:h-[220vh]`}>

        <p>EXPLORE OUR UNMATCHED SERVICES</p>

        <div className='services_card_holder'>
          <div className='services_card'>
            <Image src={require('../images/head_6.jpeg')} className=' h-full w-full' />
          </div>


          <div className='services_card'>
            <Image src={require('../images/head_6.jpeg')} className=' h-full w-full' />
          </div>

          <div className='services_card'>
            <Image src={require('../images/head_6.jpeg')} className=' h-full w-full' />
          </div>


          <div className='services_card'>
            <Image src={require('../images/head_6.jpeg')} className=' h-full w-full' />
          </div>

          <div className='services_card'>
            <Image src={require('../images/head_6.jpeg')} className=' h-full w-full' />
          </div>


          <div className='services_card'>
            <Image src={require('../images/head_6.jpeg')} className=' h-full w-full' />
          </div>

        </div>


      </section>


      <section className={styles.section_3}>

        <div className={`${styles.testimonial_container} flex flex-col items-center p-5 py-[5%] text-white lg:w-[100%] lg:h-[150vh]`}>
          <p className='lg:text-[35px] md:text-[35px] max-md:text-[35px]  sm:text-[30px] max-sm:text-[30px]'>Avail Our Services</p>

          <div className={`flex flex-col items-center justify-center  mt-[10%] lg:w-[60%] lg:h-[50%] md:h-[50%] md:w-[70%] sm:w-[70%] max-sm:w-[60%]`}>

            <div ref={sliderRef2} className={`lg:overflow-hidden lg:h-[80%]  lg:w-[100%]  md:overflow-hidden md:w-[100%]  sm:overflow-hidden  sm:w-[100%] max-sm:overflow-hidden max-sm:w-[100%]`}>


            <div className={`${slide_loaded?'show_slide':'hide_slide'} keen-slider__slide rounded-lg  slide`}>
                <Image src={require('../images/head_6.jpeg')}  />


                <div>
                  <p className=' '>Lorem, ipsum.</p>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dignissimos! Error cumque doloremque deserunt ratione?</p>
                </div>
              </div>



              <div className={`${slide_loaded?'show_slide':'hide_slide'} keen-slider__slide rounded-lg  slide`}>
                <Image src={require('../images/head_6.jpeg')}  />


                <div>
                  <p className=' '>Lorem, ipsum.</p>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dignissimos! Error cumque doloremque deserunt ratione?</p>
                </div>
              </div>

              
              

            </div>


          </div>

        </div>

      </section>
    </main>
  );
}
