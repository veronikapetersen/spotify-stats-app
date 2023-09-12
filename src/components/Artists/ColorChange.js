import { useRef, useEffect } from 'react';
import classes from "./ColorChange.module.css";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ColorChange = (props) => {
    const sectionRef = useRef();

    useEffect(() => {

        const section = sectionRef.current;


        gsap.to(
            section,
            {
                backgroundColor: props.color,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: "play reverse play reverse",
                    start: "top 30%",
                    end: "bottom 40%",
                    markers: true,
                },
            }
        );


    }, [])

    return (
        <div ref={sectionRef} className={classes.container}>
            {props.children}
        </div>
    );
}

export default ColorChange;