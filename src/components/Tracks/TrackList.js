import classes from './TrackList.module.scss';
import Track from './Track';

import { useEffect, useState } from "react";

import Heading2 from '../ui/Heading2';

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
            <Heading2>Top Tracks</Heading2>
            {/* <p className={classes.text}>Here are my top songs based on the number of times I've listened to them.</p> */}
            {/* <div className={classes.text}>
                <p>Hover the track to listen to the audio snippet.</p>
            </div> */}
            <br></br>
            <br></br>
            <ul className={classes['track-list']}>
                <li className={classes.headers}>
                    <div>Track</div>
                    <div>Album</div>
                    <div>Length</div>
                </li>
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
            </ul >
        </>
    )
}