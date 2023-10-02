import { extend } from '@react-three/fiber'
import { MeshReflectorMaterial, useTexture } from '@react-three/drei';
extend ({ MeshReflectorMaterial })
import { useControls } from 'leva'
import * as THREE from 'three'
import { Suspense } from 'react'

export default function Floor()
{
    const y = 0

    const roughnessTexture = useTexture('textures/Texturelabs_InkPaint_327L.jpg')
    roughnessTexture.repeat.x = 30
    roughnessTexture.repeat.y = 30
    roughnessTexture.wrapS = THREE.RepeatWrapping
    roughnessTexture.wrapT = THREE.RepeatWrapping

    const blurOptions = useControls(
        'blur',
        {
            mixBlur: { value: 1, min: 0, max: 1 },
            mixStrength: { value: 40, min: 0, max: 200 },
            roughness: { value: 1, min: 0, max: 1 },
            depthScale: { value: 1.2, min: 0, max: 2 },
            minDepthThreshold: { value: 0.4, min: 0, max: 1 },
            maxDepthThreshold: { value: 1.4, min: 0, max: 2 },
            metalness: { value: 0.5, min: 0, max: 1 },
            color: { value: '#fff' },
        }
    )

    return (
    <>
        <mesh rotation-x={ - Math.PI * 0.5 }>
            {/* <Html
            as='div'
            > */}
            <planeGeometry args={ [ 200, 200 ] } />
            <Suspense fallback={null}/>
            <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                // mixBlur={blurOptions.mixBlur}
                // mixStrength={40}
                roughnessMap={roughnessTexture}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={2}
                maxDepthThreshold={1.4}
                color="#fff"
                metalness={0.5}
                {...blurOptions}
            />
            {/* </Html> */}
        </mesh>
    </>
    )
}