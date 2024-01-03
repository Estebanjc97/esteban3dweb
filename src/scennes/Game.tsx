import { SoftShadows } from "@react-three/drei"
import { Lighting } from "../components/light/lighting"
import { Player } from "../components/player/Player"

export const Game = () => {
    return (
        <>
            <Lighting />
            <Player />
            <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[10, 10, 1, 1]} />
                <shadowMaterial transparent opacity={0.75} />
                <meshStandardMaterial color="white" />
            </mesh>
            <SoftShadows size={40} samples={16} />
        </>
    )
}