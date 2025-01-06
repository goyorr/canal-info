'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Slide {
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const slides: Slide[] = [
  {
    image: '/images/banner/server.jpg?height=600&width=1200',
    title: 'Servers',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    buttonText: 'Shop Now',
    buttonLink: '/about'
  },
  {
    image: '/images/banner/maintenance.jpg',
    title: 'Maintenance',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    buttonText: 'Read More',
    buttonLink: '/shop'
  },
  {
    image: '/images/banner/dev.jpg?height=600&width=1200',
    title: 'Web Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    buttonText: 'Order Now',
    buttonLink: '/signup'
  }
]

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    resetTimer()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    resetTimer()
  }

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{slide.title}</h2>
            <p className="text-xl mb-8 max-w-2xl">{slide.description}</p>
            <a href={slide.buttonLink} className="block">
              <Button
                size={"lg"}
                className="text-xl p-3 md:p-8 rounded-full gap-2 md:gap-4 mb-4"
              >
                <ArrowRight className="text-rose-500" /> {slide.buttonText}
              </Button>
            </a>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  )
}
