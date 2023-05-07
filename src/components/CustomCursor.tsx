'use client'
import React, { useState, useEffect } from 'react'

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const onMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'red',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}

export default CustomCursor
