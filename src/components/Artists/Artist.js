import classes from "./Artist.module.css";
import Card from "@/components/ui/Card";
import Image from "@/components/ui/Img";

export default function Artist(props) {
    return (
        <Card>
            <div className={classes['artist-card']}>
                <Image src={props.image} />
                <p className={classes['artist-name']}>{props.name}</p>
            </div>
        </Card>
    )
}