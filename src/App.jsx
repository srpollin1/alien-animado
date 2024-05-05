import { ScrollControls, Scroll, Sparkles } from "@react-three/drei"
import { Alien } from './Alien'


function App() {
  return (
    <>
      <color attach={'background'} args={['black']} />
      <directionalLight color="black" position={[0, 0, 5]} />

      <ScrollControls pages={4} damping={0.2}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

        {/*AQUI VA EL MODELO 3D - no se mueve*/}

        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]} />


        {/* Canvas contents in here will scroll along */}
        {/*AQUI VA EL MODELO 3D - SE MUEVE*/}
        <Alien position={[0, -2, 0]} scale={1} />


      </ScrollControls>
    </>
  )
}

export default App
