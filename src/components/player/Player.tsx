import { OrbitControls } from "@react-three/drei"
import { Player3d } from "../../assets/3d/Player3d"

export const Player = () => {
    return (
        <>
            <OrbitControls />
            <mesh>
                <Player3d />
            </mesh>
        </>
    )
}