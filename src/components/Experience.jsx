import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { DissolveMaterial } from "./DissolveMaterial";

import { useControls } from "leva";
import { useState } from "react";
import * as THREE from "three";
import { Chair } from "./Chair";
import { Table } from "./Table";

const boxMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const sphereMaterial = new THREE.MeshStandardMaterial({ color: "white" });

export const Experience = () => {
  const { itemDisplayed } = useControls({
    itemDisplayed: {
      value: "box",
      options: ["box", "sphere", "table", "chair"],
    },
  });

  const [visibleItem, setVisibleItem] = useState(itemDisplayed);
  const onFadeOut = () => setVisibleItem(itemDisplayed);

  return (
    <>
      <OrbitControls />
      {visibleItem === "box" && (
        <mesh>
          <boxGeometry />
          <DissolveMaterial
            baseMaterial={boxMaterial}
            visible={itemDisplayed === "box"}
            onFadeOut={onFadeOut}
            color="#0082b2"
          />
        </mesh>
      )}

      {visibleItem === "sphere" && (
        <mesh scale={0.5}>
          <sphereGeometry />
          <DissolveMaterial
            baseMaterial={sphereMaterial}
            visible={itemDisplayed === "sphere"}
            onFadeOut={onFadeOut}
            color="#00c11e"
          />
        </mesh>
      )}
      {visibleItem === "table" && (
        <Table
          position-y={-1}
          dissolveVisible={itemDisplayed === "table"}
          onFadeOut={onFadeOut}
        />
      )}
      {visibleItem === "chair" && (
        <Chair
          position-y={-1}
          dissolveVisible={itemDisplayed === "chair"}
          onFadeOut={onFadeOut}
        />
      )}
      <Environment preset="sunset" />
      <ContactShadows position-y={-1} />
    </>
  );
};
