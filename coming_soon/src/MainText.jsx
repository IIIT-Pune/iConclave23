import { Text3D, Center } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function MainText()
{
    return <>
        <RigidBody type="fixed" colliders="cuboid">
            <Center top>
                <Text3D
                    font="./fonts/Nightcore.json"
                    size={ 3 }
                    height={ 1 }
                    curveSegments={ 2 }
                    // bevelEnabled
                    // bevelThickness={ 0 }
                    // bevelSize={ 0.02 }
                    // bevelOffset={ 0 }
                    // bevelSegments={ 5 }
                >

                    [ i Conclave )
  
                    <meshStandardMaterial
                        color="#888"
                        metalness={ 1}
                        roughness={ 0.5 }
                    />
                </Text3D>
            </Center>
        </RigidBody>
    </>
}
