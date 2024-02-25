import React from 'react'
import { useKeenSlider } from "keen-slider/react"

export default function slider() {
        return {  
            
            sliderRef1 : useKeenSlider(
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
              ),
        }

}



