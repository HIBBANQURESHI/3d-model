import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Diamond } from "../components/Models/Slippers";

const index = () => {
  return (
    <div className="h-[100vh]">
      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <color attach="background" args={["#424242"]} />
        <Environment preset="studio" />
        <PerspectiveCamera makeDefault position={[0, 0.3, 0.1]} />
        <OrbitControls />
        <Diamond position={[0, 0.1, 0]} />
        <ContactShadows />
      </Canvas>
    </div>
  );
};

export default index;
