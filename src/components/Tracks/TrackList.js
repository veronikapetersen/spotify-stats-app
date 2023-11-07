import classes from './TrackList.module.css';
import Track from './Track';

import { useEffect, useState } from "react";

export default function TrackList() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api/stats/tracks")
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <h2 className={classes.h2}>Top Tracks</h2>
            <p className={classes.text}>Here are my top songs based on the number of times I've listened to them.</p>
            <ul className={classes['track-list']}>

                {data.map((track) => (
                    <li key={track.id}>
                        <Track
                            title={track.title}
                            image={track.coverImage.url}
                            preview={track.preview}
                            artist={track.artist}
                            length={track.length}
                            album_type={track.album_type}
                            album_name={track.album_name}
                            explicit={track.explicit}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}