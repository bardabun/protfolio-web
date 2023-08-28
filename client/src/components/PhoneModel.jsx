import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
// import { useControls } from 'leva'
import './phoneModel.css';

import myVideo from "../assets/images/showRide.mp4";

export default function PhoneModel()
{
    
  //   const { distanceFactor, position, rotation } = useControls({ 
  //     distanceFactor: 2.12 , 
  //     position: { 
  //         value: { x: 0.16, y: 1.33 , z: 0.08 },
  //         step: 0.001
  //     },
  //     rotation: -0.01
  // })

    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
    
    return <>

        <color args={ [ '#282d35' ] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls
            global
            rotation={ [ 0.1, -0.8, 0 ] }
            polar={ [ - 0.2, 0.2 ] }
            azimuth={ [ - 0.5, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
            >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#ff6900' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive
                    object={ phone.scene }
                    position-y={ - 1.2 }
                    rotation-x={ -0.25 }
                >
                  <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 2.12 }
                        position={ [0.16, 1.33, 0.08] }
                        rotation-x={ -0.01 }
                    >
                        <video
                            title="show ride"
                            controls
                            width="560"
                            height="315"
                            src={myVideo}
                            allowFullScreen />
                    </Html>
                </primitive>

                <Text
                    fontSize={ 0.35 }
                    position={ [ -0.7, 2.2, -1.5 ] }
                    rotation-y={ 0.5 }
                    maxWidth={ 2 }
                    textAlign='center'
                >
                    Show Ride On Map
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
            />

    </>
}