import classes from "./ArtistList.module.css";
import Artist from "./Artist";
import { useEffect, useState } from "react";

//swiper
import { useRef } from 'react';
import { register } from 'swiper/element/bundle';
register();

export default function ArtistList() {

    //swiper
    const swiperElRef = useRef(null);

    useEffect(() => {
        swiperElRef.current.addEventListener('progress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide changed');
        });
    }, []);
    //swiper done


    const [data, setData] = useState([]);
    useEffect(() => {
        // Fetch data from your API endpoint
        fetch("/api/stats/artists")
            .then((response) => response.json())
            .then((result) => {
                setData(result); // Store the fetched data in state
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <h2 className={classes.h2}>Top Artists</h2>
            <p className={classes.text}>
                Here are my top artists based on the number of times I've listened to their songs.
            </p>

            <swiper-container
                ref={swiperElRef}
                slides-per-view="3"
                navigation="true"
                pagination="true"
            >
                {data.map((artist) => (
                    <swiper-slide key={artist.id}>
                        <Artist
                            name={artist.name}
                            image={artist.coverImage.url}
                        />
                    </swiper-slide>
                ))
                }
            </swiper-container>
        </>
    )
}