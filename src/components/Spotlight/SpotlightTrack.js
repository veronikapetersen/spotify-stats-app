import classes from './SpotlightTrack.module.scss';
import { useEffect, useState } from 'react';

import Heading2 from '../ui/Heading2';

export default function SpotlightTrack() {
    const [data, setData] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/now-playing");
                const result = await response.json();

                if (result.isPlaying) {
                    setIsPlaying(true);
                    setData(result);
                } else {
                    const recentlyPlayedResponse = await fetch("/api/recently-played");
                    const recentlyPlayedResult = await recentlyPlayedResponse.json();
                    setData(recentlyPlayedResult);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={classes['spotlight-wrapper']}>
            <div className={classes.doublesection}>
                <div className={classes.left}>
                    <div className={classes['images-container']}>
                        <img className={classes.topimage} src={data.albumImageUrl} alt="Album cover" />
                        <img className={classes.vinyl} src="/images/vinyl.png" alt="Vinyl" />
                    </div>
                </div>

                <div className={classes.right}>
                    <div>
                        <Heading2>{isPlaying ? "Currently Playing" : "Recently Played"}</Heading2>
                    </div>
                    <div className={classes['track-info']}>
                        <p className={classes['track-title']}>{data.title}</p>
                        <p className={classes['track-artist']}>by {data.artist}</p>
                        {data.album_type === "album" ? (
                            <p className={classes['track-album']}>Album: {data.album_name}</p>
                        ) : ("")}
                    </div>
                </div>
            </div>
        </div>
    );
}
