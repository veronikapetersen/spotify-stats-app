// import Link from 'next/link'
import classes from "./Artist.module.css";
import Card from "@/components/ui/Card";
import Image from "@/components/ui/Img";

export default function Artist(props) {
    return (
        <Card>
            {/* <div className={classes['artist-card']}>
                <p className={classes['artist-name']}>{props.name}</p>
            </div> */}

            <div className={classes['artist-card']}>
                <div className={classes['artist-info']}>
                    <p>{props.genres.map(genre => { return <span>{genre} </span> })}</p>
                    <p className={classes['artist-name']}>{props.name}</p>
                    {/* <Link target="_blank" href={props.url}>see on spotify</Link> */}
                    <p>{props.followers} followers</p>
                    <p>popularity: {props.popularity}</p>
                </div>
                <div>
                    <Image src={props.image} />
                </div>
            </div>

        </Card >
    )
}