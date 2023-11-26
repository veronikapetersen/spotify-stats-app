import { useState, useRef } from 'react';
import classes from './Track.module.scss';
import Card from '@/components/ui/Card';
import Image from '@/components/ui/Img';

export default function Track(props) {

    // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    // const [hovered, setHovered] = useState(false);

    // const handleMouseMove = (e) => {
    //     setCursorPosition({ x: e.clientX, y: e.clientY });
    // }

    const audioRef = useRef(null);
    const handleMouseEnter = () => {
        // setHovered(true);
        // audioRef.current.play();
    };
    const handleMouseLeave = () => {
        // setHovered(false);
        // audioRef.current.pause();
        // audioRef.current.currentTime = 0;
    };

    return (
        <Card>
            <div className={classes.track}
                // onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* <div
                    className={`${classes.circlecursor} ${hovered ? classes.show : ''}`}
                    style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
                >
                    playing audio
                </div> */}


                <div className={classes['track__image']}><img src={props.image} /></div>

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

                {/* <audio ref={audioRef} src={props.preview}></audio> */}
            </div>
        </Card >
    )
}
