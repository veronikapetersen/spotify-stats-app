import { useRef } from 'react';
import classes from './Track.module.css';
import Card from '@/components/ui/Card';
import Image from '@/components/ui/Img';

export default function Track(props) {
    const audioRef = useRef(null);
    const handleMouseEnter = () => {
        // audioRef.current.play();
    };
    const handleMouseLeave = () => {
        // audioRef.current.pause();
        // audioRef.current.currentTime = 0;
    };

    return (
        <Card>
            <div className={classes.track} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={classes['track-image']}><img src={props.image} /></div>
                <div className={classes['track-info']}>
                    <div>
                        <div className={classes['track-title']}>{props.title}</div>
                        <div className={classes['track-artist']}>
                            {props.explicit ? <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-280h240v-80H440v-80h160v-80H440v-80h160v-80H360v400ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg> : null}
                            {props.artist}
                        </div>
                    </div>
                    <div>
                        {props.album_type === "SINGLE" ? <div>Single</div> : <div>{props.album_name}</div>}
                    </div>
                    <div>{props.length}</div>
                </div>
                {/* <audio ref={audioRef} src={props.preview}></audio> */}
            </div>
        </Card >
    )
}
