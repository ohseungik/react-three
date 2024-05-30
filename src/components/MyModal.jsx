import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3, BufferGeometry, BufferAttribute, TextureLoader, DoubleSide } from "three";

export const MyModel = ({ imageval }) => {
    const texture = useLoader(TextureLoader, imageval);
    const geometry = new BufferGeometry();
    const vertices = [
        new Vector3(-1, -1, 0),
        new Vector3(1, -1, 0),
        new Vector3(1, 1, 0),
        new Vector3(-1, 1, 0)
    ];
    const positions = new Float32Array(vertices.length * 3);

    for (let i = 0; i < vertices.length; i++) {
        positions[i * 3] = vertices[i].x;
        positions[i * 3 + 1] = vertices[i].y;
        positions[i * 3 + 2] = vertices[i].z;
    }

    geometry.setAttribute("position", new BufferAttribute(positions, 3));

    return (
        <mesh>
            <planeGeometry attach="geometry" args={[2, 2]} />
            <meshBasicMaterial attach="material" map={texture} side={DoubleSide} />
        </mesh>
    );
};

export const ARView = ({ imageval }) => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }} className="canvas" >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <MyModel imageval={imageval} />
            <OrbitControls
                minAzimuthAngle={-Math.PI}
                maxAzimuthAngle={Math.PI}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
                
            />
        </Canvas>
    );
};