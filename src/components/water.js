import * as THREE from "three"
import React, { Suspense, useRef, useMemo, useState, useEffect } from "react"
import { Canvas, extend, useThree, useLoader, useFrame } from "@react-three/fiber"
import { Sky, PerspectiveCamera } from "@react-three/drei"
import { Water } from "three-stdlib"

extend({ Water })

function Ocean() {
  const ref = useRef()
  const gl = useThree(state => state.gl)
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
      format: gl.encoding,
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

export default function App() {
  return (
    <Canvas>
      <Camera {...{ makeDefault: true, position: [0, 5, 5], fov: 55, near: 1, far: 20000 }} />
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />
      <Suspense fallback={null}>
        <Ocean />
      </Suspense>
      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={10} />
    </Canvas>
  )
}

function Camera(props) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => setScrollPosition(window.pageYOffset)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useFrame(({ camera, clock }) => {
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, scrollPosition * -0.5, 0.1) - 5
    camera.position.y = Math.sin(clock.elapsedTime) + 16
    camera.lookAt(0, 0, 0)
  })

  return <PerspectiveCamera {...props} />
}
