import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 5], fov: 42 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={1.25} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
