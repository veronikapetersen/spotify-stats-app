import classes from "./ArtistList.module.scss";
import Artist from "./Artist";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import { register } from 'swiper/element/bundle';
register();

export default function ArtistList() {

    const swiperElRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperElRef.current;
        const params = {
            pagination: true,
            // navigation: true,
            mousewheel: true,
            slidesPerView: 1,
            injectStyles: [
                `
                .swiper-pagination-bullet{
                  background-color: #ffcdd2;
                  height: 12px;
                  width: 12px;
                  opacity: 0.5;
                }

                .swiper-pagination-bullet-active {
                    opacity: 1;
                }

                .swiper-wrapper {
                    padding-bottom: 30px;
                }
                .swiper-pagination {
                    bottom: 10px;
                }
                `
            ]
        }

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

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
            <p className={classes.text}>Here are my top artists based on the number of times I've listened to their songs.</p>

            <swiper-container
                ref={swiperElRef}
                init="false"
            >
                {data.map((artist) => (
                    <swiper-slide key={artist.id}>
                        <Artist
                            name={artist.name}
                            followers={artist.followers}
                            image={artist.coverImage.url}
                            genres={artist.genres}
                            popularity={artist.popularity}
                            url={artist.url}
                        />
                    </swiper-slide>
                ))
                }
            </swiper-container>
        </>
    )
}