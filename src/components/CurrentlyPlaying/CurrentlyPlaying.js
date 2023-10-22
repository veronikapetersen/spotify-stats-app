import classes from "./CurrentlyPlaying.module.css";

import { useEffect, useState } from "react";

export default function CurrentlyPlaying() {

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
        <div className={classes.doublesection}>

            <div className={classes.left}>
                <h2 className={classes.h2}>Currently Playing</h2>
                <p>&#x1F3A7;Track: {data.title}</p>
                <p>Artist: {data.artist}</p>
                <p>Album: {data.album}</p>
            </div>

            <div className={classes.current}>
                <img src={data.albumImageUrl} alt="Album cover" />
            </div>
        </div>
    )
}