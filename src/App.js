import { Canvas} from '@react-three/fiber'
import { OrbitControls, Stars, Sky, useGLTF, CameraShake } from '@react-three/drei'
import Box from './components/Box';
import { useControls } from 'leva';

export default function App() {

  const Models = [
    { title: 'ferrari1', url: './src/models/ferrari.glb' },
    { title: 'ferrari2', url: './src/models/ferrari.glb' },
    { title: 'ferrari3', url: './src/models/ferrari.glb' },
  ]


  function Model({ url }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
  }

  const { title } = useControls({
    title: {
      options: Models.map(({ title }) => title),
    },
  })


  return (
    <div style={{ height:"700px" }} >

    <Canvas> 
      
      <Stars />
      <Box position={[0, 0, 0 ]} />  
      <ambientLight intensity={0.5} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Sky azimuth={-10} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
      <OrbitControls />
    </Canvas>
    </div>

  );
}
