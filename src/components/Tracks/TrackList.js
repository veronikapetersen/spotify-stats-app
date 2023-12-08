import classes from './TrackList.module.scss';
import Track from './Track';

import { useEffect, useState } from "react";

import Heading2 from '../ui/Heading2';

export default function TrackList() {


    const [data, setData] = useState([]);
    const [playingTrackId, setPlayingTrackId] = useState(null);

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

    const playTrack = (trackId) => {
        console.log("playTrack", trackId)
        if (playingTrackId === trackId) {
            setPlayingTrackId(null);
        } else {
            setPlayingTrackId(trackId);
        }
    };

    const handleTrackEnd = () => {
        setPlayingTrackId(null);
    }

    return (
        <>
            <Heading2>Top Tracks</Heading2>
            <p className={classes.text}>Here are your top songs based on the number of times you've listened to them.</p>
            <br></br>
            <br></br>
            <ul className={classes['track-list']}>
                <li className={classes.headers}>
                    <div>Track</div>
                    <div>Album</div>
                    <div>Length</div>
                </li>
                {data.map((track) => (
                    <li key={track.track_id}>
                        <Track
                            title={track.title}
                            image={track.coverImage.url}
                            preview={track.preview}
                            artist={track.artist}
                            length={track.length}
                            album_type={track.album_type}
                            album_name={track.album_name}
                            explicit={track.explicit}
                            isPlaying={playingTrackId === track.track_id}
                            onPlay={() => playTrack(track.track_id)}
                            onFinish={handleTrackEnd}
                        />
                    </li>
                ))}
            </ul >
        </>
    )
}