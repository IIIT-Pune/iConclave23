import { useControls } from 'leva'

export default function Fog()
{
    const { backgroundColor, range } = useControls(
        'fog',
        {
            backgroundColor: { value: '#e7e7e7' },
            range: { value: [ 30, 100 ], min: 0, max: 100 }
        }
    )

    return <>
        <color args={ [ backgroundColor ] } attach="background" />
        <fog attach="fog" color={ backgroundColor } near={ range[0] } far={ range[1] } />
    </>
}