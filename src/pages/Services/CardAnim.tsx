import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'

type ServiceSlide = {
  id: number
  title: string
  subtitle: string
  description: string[]
}

const services: ServiceSlide[] = [
  {
    id: 1,
    title: "Web Development",
    subtitle: "Creating modern web experiences",
    description: [
      "Custom website development",
      "Responsive design implementation",
      "E-commerce solutions",
      "Progressive web applications"
    ]
  },
  {
    id: 2,
    title: "UI/UX Design",
    subtitle: "Crafting beautiful interfaces",
    description: [
      "User interface design",
      "User experience optimization",
      "Wireframing and prototyping",
      "Design systems creation"
    ]
  },
  {
    id: 3,
    title: "Digital Marketing",
    subtitle: "Growing your online presence",
    description: [
      "Search engine optimization",
      "Social media marketing",
      "Content strategy",
      "Analytics and reporting"
    ]
  },
  {
    id: 4,
    title: "Mobile Development",
    subtitle: "Building native & cross-platform apps",
    description: [
      "iOS and Android development",
      "React Native applications",
      "App store optimization",
      "Mobile UI/UX design"
    ]
  }
]

export function ServiceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const [isTextAnimating, setIsTextAnimating] = useState(true)

  // Handle slide transitions
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
      setTextIndex(0)
      setIsTextAnimating(true)
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [])

  // Handle text animation within each slide
  useEffect(() => {
    if (!isTextAnimating) return

    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        if (nextIndex >= services[currentIndex].description.length) {
          setIsTextAnimating(false)
          return prevIndex
        }
        return nextIndex
      })
    }, 800)

    return () => clearInterval(textInterval)
  }, [currentIndex, isTextAnimating, textIndex])

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We provide comprehensive solutions tailored to your specific needs.
          Explore our range of professional services designed to help your business grow.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto h-[400px] relative overflow-hidden rounded-xl shadow-xl bg-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 p-8 md:p-12 flex items-center justify-center h-full"
          >
            <div className="flex flex-col items-center text-center max-w-xl">
              {/* Title and subtitle in the center */}
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {services[currentIndex].title}
              </motion.h3>
              
              <motion.p 
                className="text-muted-foreground text-lg mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {services[currentIndex].subtitle}
              </motion.p>

              {/* Description list */}
              <ul className="space-y-4 w-full">
                {services[currentIndex].description.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: index <= textIndex ? 1 : 0,
                      y: index <= textIndex ? 0 : 10
                    }}
                    transition={{ duration: 0.3, delay: index * 0.15 }}
                    className={cn(
                      "flex items-center justify-center text-lg md:text-xl transition-all duration-300",
                      index <= textIndex ? "text-foreground" : "text-muted-foreground/50"
                    )}
                  >
                    <span className="mr-3 text-primary">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setTextIndex(0)
                setIsTextAnimating(true)
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentIndex === index 
                  ? "bg-primary w-6" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}