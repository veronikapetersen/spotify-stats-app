import { useRef } from 'react';
import classes from './Track.module.css';
import Card from '@/components/ui/Card';
import Image from '@/components/ui/Img';

export default function Track(props) {

    const audioRef = useRef(null);

    const handleMouseEnter = () => {
        audioRef.current.play();
    };

    const handleMouseLeave = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    return (
        <Card>
            <div className={classes.track} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image src={props.image} />
                <p>{props.title}</p>
                <audio ref={audioRef} src={props.preview}></audio>
            </div>
        </Card>
    )
}