import classes from "./ArtistListNew.module.scss";
// import { useEffect, useState } from "react";
// import { useRef } from 'react';
// import { register } from 'swiper/element/bundle';

// register();

// export default function ArtistListNew() {

//     const swiperElRef = useRef(null);

//     useEffect(() => {
//         const swiperContainer = swiperElRef.current;
//         const params = {

//             mousewheel: true,
//             injectStyles: [
//                 `
//                 .wrapper {
//                     background-color: red;
//                 }
//                 `
//             ]
//         }

//         // Object.assign(swiperContainer, params);
//         // swiperContainer.initialize();
//     }, []);

//     const [data, setData] = useState([]);
//     useEffect(() => {
//         // Fetch data from your API endpoint
//         fetch("/api/stats/artists")
//             .then((response) => response.json())
//             .then((result) => {
//                 setData(result); // Store the fetched data in state
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }, []);

//     return (
//         <>
//             <swiper-container
//                 ref={swiperElRef}
//                 mousewheel={true}
//             >
//                 <swiper-slide>Slide 1</swiper-slide>
//                 <swiper-slide>Slide 2</swiper-slide>
//                 <swiper-slide>Slide 3</swiper-slide>

//             </swiper-container>
//         </>
//     )
// }


import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
// import mousewheel styles



register();

export default function ArtistListNew() {
    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <div className={classes.wrapper}>
            <p>lorem ipsum </p>
            <swiper-container
                ref={swiperElRef}
                mousewheel="true"
            >

                <swiper-slide><div className={classes.div}>hey there</div></swiper-slide>
                <swiper-slide><div className={classes.div}>Slide 2</div></swiper-slide>
                <swiper-slide><div className={classes.div}>Slide 3</div></swiper-slide>
                <swiper-slide><div className={classes.div}>Slide 4</div></swiper-slide>
                <swiper-slide><div className={classes.div}>Slide 5</div></swiper-slide>
            </swiper-container >
        </div>
    );
};