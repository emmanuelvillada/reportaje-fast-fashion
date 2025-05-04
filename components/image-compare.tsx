"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function ImageCompare() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setSliderPosition(percentage)
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      isDragging.current = false
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden rounded-xl cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {/* Imagen "después" (medio ambiente dañado) - Capa inferior */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Medio ambiente dañado por residuos textiles"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">Después</div>
      </div>

      {/* Imagen "antes" (medio ambiente saludable) - Capa superior con clip */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Medio ambiente saludable"
          fill
          className="object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
        />
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">Antes</div>
      </div>

      {/* Línea divisoria y control deslizante */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L3 10L8 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 5L21 10L16 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
