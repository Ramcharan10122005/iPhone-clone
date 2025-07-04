import { View } from "@react-three/drei"
import Lights from "./Lights"
import Iphone from "./Iphone"
import { Suspense } from "react"
import { PerspectiveCamera } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei"
import * as Three from "three"
import { Html } from "@react-three/drei"
import Loader from "./Loader"
import { useGSAP } from "@gsap/react"
import { animateWithGsapTimeline } from "../utils/animations"
import gsap from "gsap"
import { useEffect } from "react"

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {

    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2?'right-[-100%]':''}`}
        >
            {/* Ambient Light */}
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <Lights />

            <OrbitControls 
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new Three.Vector3(0,0,0)}
                onEnd={()=>{
                    setRotationState(controlRef.current.getAzimuthalAngle());
                }}
            />

            <group ref={groupRef} name={`${index===1?'small':'large'}`} position={[0,0,0]}>
                <Suspense fallback={<Loader/>}>
                    <Iphone 
                        scale={index===1?[15,15,15]:[17,17,17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>


        </View>
    )
}

export default ModelView