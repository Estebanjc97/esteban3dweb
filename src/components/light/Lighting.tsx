export const Lighting = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight intensity={1} position={[-1, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
        </>
    )
}