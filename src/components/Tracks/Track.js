import classes from './Track.module.css';
import Card from '@/components/ui/Card';
import Image from '@/components/ui/Img';

export default function Track(props) {
    return (
        <Card>
            <div className={classes.track}>
                <Image src={props.image} />
                <p>{props.title}</p>
            </div>
        </Card>
    )
}