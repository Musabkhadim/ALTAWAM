"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function CertificationBadges() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const badges = [
    {
      src: "/cer1.jpg",
      alt: "Certified Remanufacturer Badge",
      title: "Certified Remanufacturer",
    },
    {
      src: "/cer2.jpg",
      alt: "Certified Refurbisher Badge",
      title: "Certified Refurbisher",
    },
    {
      src: "/cer3.jpg",
      alt: "Sustainability Excellence Badge",
      title: "Sustainability Excellence",
    },
    {
      src: "/cer4.jpg",
      alt: "QR Code Badge",
      title: "QR Code",
    },
  ]

  return (
    <section className="relative py-12 md:py-16 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with responsive font size */}
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-6 sm:mb-8 text-white">
          Certified Achievements
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="certification-badge flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full aspect-square max-w-[120px] sm:max-w-[150px] md:max-w-[180px] mb-2 sm:mb-3">
                <Image
                  src={badge.src || "/placeholder.svg"}
                  alt={badge.alt}
                  fill
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
                  className="object-contain"
                  style={{
                    opacity: isMounted ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center font-medium">{badge.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Add a subtle animation for visual interest */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -inset-[10%] opacity-5 bg-gradient-radial from-teal-500 to-transparent rounded-full blur-3xl" />
        </div>
      )}
    </section>
  )
}
