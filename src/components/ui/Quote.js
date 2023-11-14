import classes from './Quote.module.scss';
import { useEffect, useRef } from 'react';
import ConfettiButton from './ConfettiButton';

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Quote(props) {
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
                        start: 'top 55%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                        markers: false
                    },
                }
            );
        });
    }, []);

    return (
        <div className={classes.quote}>
            <div ref={titleRef}>
                <div className={classes.element}>Did you know that your favourite artist </div>
                <div className={classes.element}><b>{props.name}</b> is ranked at <b>#{props.popularity}</b></div>
                <div className={classes.element}>in popularity* on Spotify?</div>
                <ConfettiButton />
            </div>
            <div className={classes.smaller}>
                <div>* The popularity of the artist is a value between 0 and 100, with 100 being the most popular. </div>
                <div>The artist's popularity is calculated from the popularity of all the artist's tracks.</div>
            </div>
        </div>
    );
};
