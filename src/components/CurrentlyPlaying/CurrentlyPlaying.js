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
                <img src={data.albumImageUrl} alt="Album cover" />
            </div>

            <div className={classes.right}>
                <div>
                    <h2 className={classes.h2}>Currently Playing</h2>
                </div>
                <div className={classes['track-info']}>
                    {/* <p>&#x1F3A7;Track: {data.title}</p> */}
                    <p className={classes['track-title']}>{data.title}</p>
                    <p className={classes['track-artist']}>by {data.artist}</p>
                    <p className={classes['track-album']}>Album: {data.album}</p>
                </div>
            </div>
        </div>
    )
}