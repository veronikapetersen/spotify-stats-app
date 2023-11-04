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
                duration: 0.7,
                scrollTrigger: {
                    trigger: section,
                    // toggleActions: "play reverse play reverse",
                    // toggleActions: "none play none reverse",
                    toggleActions: props.toggleActions,
                    start: props.start,
                    end: props.end,
                    markers: props.markers
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