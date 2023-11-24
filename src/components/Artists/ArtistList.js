import classes from "./ArtistList.module.scss";
import Artist from "./Artist";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import { register } from 'swiper/element/bundle';
import Quote from "../ui/Quote";
import Heading2 from "../ui/Heading2";
register();

export default function ArtistList() {

    const swiperElRef = useRef(null);
    const [data, setData] = useState([]);
    const [topArtist, setTopArtist] = useState([]);

    useEffect(() => {
        const swiperContainer = swiperElRef.current;
        const params = {
            pagination: true,
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


    useEffect(() => {
        fetch("/api/stats/artists")
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setTopArtist(result[0]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <Heading2>Top Artists</Heading2>
            <p className={classes.text}>Here are your top artists based on the number of times you've listened to their songs.</p>

            <swiper-container
                ref={swiperElRef}
                init="false"
            >
                {data.map((artist) => (
                    <swiper-slide key={artist.id}>
                        <Artist
                            rank={artist.rank}
                            name={artist.name}
                            image={artist.coverImage.url}
                            genres={artist.genres}
                            url={artist.url}
                        />
                    </swiper-slide>
                ))
                }
            </swiper-container>

            <Quote name={topArtist.name} popularity={topArtist.popularity} />

        </>
    )
}