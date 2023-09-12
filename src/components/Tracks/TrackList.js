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

        <ul className={classes['track-list']}>

            {data.map((track) => (
                <li key={track.id}>
                    <Track
                        title={track.title}
                        image={track.coverImage.url}
                        preview={track.preview}
                    />
                </li>
            ))}
        </ul>
    )
}