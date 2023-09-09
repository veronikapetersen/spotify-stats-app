import classes from "./CurrentlyPlaying.module.css";

import { useEffect, useState } from "react";

export default function CurrentlyPlaying(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/now-playing")
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    return (
        <div className={classes.current}>
            <p>&#x1F3A7;Track: {data.title}</p>
            <p> Listen to the music with headphones! &#x1F3A7;</p>
            <p>Artist: {data.artist}</p>
            <p>Album: {data.album}</p>
            <img src={data.albumImageUrl} alt="Album cover" />
        </div>
    )
}