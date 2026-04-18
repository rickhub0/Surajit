import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei'
import { useRef } from 'react'

function OrbCluster() {
  const groupRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!groupRef.current) return
    groupRef.current.rotation.y = t * 0.15
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.15
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.1}>
        <Sphere args={[1.05, 96, 96]}>
          <MeshDistortMaterial
            color="#6d5efc"
            emissive="#2f1b8f"
            roughness={0.1}
            metalness={0.9}
            distort={0.35}
            speed={2.1}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.3}>
        <Torus args={[1.95, 0.08, 32, 150]} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
          <meshStandardMaterial color="#22d3ee" emissive="#164e63" roughness={0.2} />
        </Torus>
      </Float>

      <Float speed={2.1} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[-1.9, 0.9, -0.7]}>
          <icosahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#93c5fd" metalness={0.9} roughness={0.15} />
        </mesh>
      </Float>

      <Float speed={1.7} rotationIntensity={1.1} floatIntensity={1.4}>
        <mesh position={[1.8, -0.8, 0.4]}>
          <octahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial color="#f0abfc" metalness={0.95} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  )
}

export default function ThreeHeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.8], fov: 52 }} dpr={[1, 1.6]}>
      <color attach="background" args={["#050816"]} />
      <ambientLight intensity={0.65} />
      <pointLight position={[4, 3, 4]} intensity={35} color="#6d5efc" />
      <pointLight position={[-4, -2, -3]} intensity={25} color="#22d3ee" />
      <OrbCluster />
    </Canvas>
  )
}
