import classes from './Quote.module.scss';
import { useEffect, useRef } from 'react';

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Quote() {
    const titleRef = useRef(null);

    useEffect(() => {

        const children = titleRef.current.children;

        Array.from(children).forEach((target) => {
            gsap.to(
                target,
                {
                    backgroundPositionX: 0,
                    scrollTrigger: {
                        trigger: target,
                        start: 'top 40%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                        markers: false
                    },
                }
            );
        });
    }, []);

    return (
        <div className={classes.content}>
            <div ref={titleRef}>
                <div className={classes.element}>My house is buried in the deepest recess of the forest</div>
                <div className={classes.element}>Every year, ivy vines grow longer than the year before.</div>
                <div className={classes.element}>Undisturbed by the affairs of the world I live at ease,</div>
                <div className={classes.element}>Woodmen's singing rarely reaching me through the trees.</div>
            </div>
        </div>
    );
};

