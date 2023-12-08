import { useEffect, useRef } from 'react';
import classes from './Track.module.scss';
import Card from '@/components/ui/Card';

export default function Track(props) {

    const audioRef = useRef(null);

    useEffect(() => {
        if (props.isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const audio = audioRef.current;
        const handleEnd = () => {
            if (props.onFinish) {
                props.onFinish();
            }
        };

        audio.addEventListener('ended', handleEnd);

        return () => audio.removeEventListener('ended', handleEnd);

    }, [props.isPlaying, props.onFinish]);

    return (
        <Card>
            <div className={classes.track}>
                <div>
                    <button onClick={props.onPlay} className={classes['play-button']}>
                        {props.isPlaying ? (<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" /></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" /></svg>)}
                    </button>
                </div>

                <div className={classes['track__image']}>
                    <img src={props.image} alt='album cover' />
                </div>

                <div className={classes['track__info']} >
                    <div>
                        <div className={classes['track-title']}>{props.title}</div>
                        <div className={classes['track-artist']}>
                            {props.explicit ? <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-280h240v-80H440v-80h160v-80H440v-80h160v-80H360v400ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg> : null}
                            {props.artist}
                        </div>
                    </div>

                    <div className={classes['track__info__extra']}>
                        {props.album_type === "SINGLE" ? <div><i>single</i></div> : <div className={classes.album}>{props.album_name}</div>}
                    </div>

                    <div className={classes['track__info__extra']}>{props.length}</div>

                </div>

                <audio ref={audioRef} src={props.preview}></audio>
            </div>
        </Card >
    )
}
