import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Edges } from '@react-three/drei';

const SubCube = ({ position, color }) => {
  return (
    <Box position={position} args={[0.95, 0.95, 0.95]}>
      <meshStandardMaterial color={color} />
      {/* Border Putih Tegas agar terlihat seperti kotak terpisah */}
      <Edges scale={1} threshold={15} color="white" />
    </Box>
  );
};

const RubikCube = () => {
  const cubeSize = 3;
  const cubes = [];

  // Logika penentuan warna sisi luar agar lebih cerah (Vibrant Colors)
  const getColor = (x, y, z) => {
    if (x === 1) return '#ef4444';   // Merah Terang
    if (x === -1) return '#f97316';  // Orange
    if (y === 1) return '#f8fafc';   // Putih Bersih
    if (y === -1) return '#eab308';  // Kuning
    if (z === 1) return '#3b82f6';   // Biru
    if (z === -1) return '#22c55e';  // Hijau
    return '#1e293b';                // Dalamnya gelap
  };

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubes.push(<SubCube key={`${x}${y}${z}`} position={[x, y, z]} color={getColor(x, y, z)} />);
      }
    }
  }

  return (
    <div className="w-full h-full cursor-move">
      <Canvas camera={{ position: [5, 5, 5], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <group rotation={[0.5, 0.5, 0]}>
          {cubes}
        </group>
        {/* OrbitControls mengizinkan user memutar seluruh rubik untuk dimainkan */}
        <OrbitControls enableZoom={false} makeDefault />
      </Canvas>
    </div>
  );
};

export default RubikCube;