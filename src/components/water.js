import * as THREE from "three"
import React, { Suspense, useRef, useMemo } from "react"
import { Canvas, extend, useLoader, useFrame } from "@react-three/fiber"
import { Sky, OrbitControls } from "@react-three/drei"
import { Water } from "three-stdlib"

extend({ Water })

function Ocean() {
  const ref = useRef()
  // const gl = useThree(state => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg")
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      // format: gl.encoding,
    }),
    [waterNormals]
  )
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  )
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 80, -100], fov: 55, near: 1, far: 20000 }}>
      <Suspense fallback={null}>
        <Ocean />
      </Suspense>
      <Sky scale={1000} sunPosition={[500, 150, 1000]} turbidity={0.1} />
      <OrbitControls
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={1}
        enableZoom={false}
      />
    </Canvas>
  )
}
