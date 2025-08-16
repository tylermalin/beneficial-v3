'use client'

import { useEffect, useState, useRef, useMemo } from 'react'

export function ThreeBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-black" />
  }

  // Only render Three.js components on the client side
  return <ClientOnlyThreeBackground />
}

function ClientOnlyThreeBackground() {
  // This component will only render on the client side
  const [ThreeJSComponents, setThreeJSComponents] = useState<any>(null)

  useEffect(() => {
    // Dynamically import Three.js components only on the client
    const loadThreeJS = async () => {
      try {
        const { Canvas, useFrame } = await import('@react-three/fiber')
        const { Points, PointMaterial } = await import('@react-three/drei')
        
        // Create the Stars component dynamically
        const Stars = () => {
          const ref = useRef<any>()
          
          const sphere = useMemo(() => {
            const positions = new Float32Array(5000 * 3)
            for (let i = 0; i < 5000; i++) {
              const radius = Math.random() * 1.5
              const theta = Math.random() * Math.PI * 2
              const phi = Math.acos(2 * Math.random() - 1)
              
              const x = radius * Math.sin(phi) * Math.cos(theta)
              const y = radius * Math.sin(phi) * Math.sin(theta)
              const z = radius * Math.cos(phi)
              
              positions[i * 3] = x
              positions[i * 3 + 1] = y
              positions[i * 3 + 2] = z
            }
            return positions
          }, [])

          useFrame((state, delta) => {
            if (ref.current) {
              ref.current.rotation.x -= delta / 10
              ref.current.rotation.y -= delta / 15
            }
          })

          return (
            <group rotation={[0, 0, Math.PI / 4]}>
              <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                  transparent
                  color="#FA4C14"
                  size={0.005}
                  sizeAttenuation={true}
                  depthWrite={false}
                />
              </Points>
            </group>
          )
        }

        setThreeJSComponents({ Canvas, Stars })
      } catch (error) {
        console.error('Failed to load Three.js components:', error)
      }
    }

    loadThreeJS()
  }, [])

  if (!ThreeJSComponents) {
    return <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-black" />
  }

  const { Canvas, Stars } = ThreeJSComponents

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: false }}>
        <Stars />
      </Canvas>
    </div>
  )
}
