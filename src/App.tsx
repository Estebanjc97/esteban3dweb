import './App.css'
import { Canvas } from '@react-three/fiber'
import { Game } from './scennes/Game'

function App() {

  return (
    <>
      <div className="canvas-container">
        <Canvas shadows gl={{ antialias: true }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
          <Game />
        </Canvas>
      </div>
    </>
  )
}

export default App
