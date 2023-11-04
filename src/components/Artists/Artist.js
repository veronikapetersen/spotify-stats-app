// import Link from 'next/link'
import classes from "./Artist.module.css";
import Card from "@/components/ui/Card";
import Image from "@/components/ui/Img";
// import Tippy from '@tippyjs/react';

export default function Artist(props) {
    return (
        <Card>
            {/* <div className={classes['artist-card']}>
                <p className={classes['artist-name']}>{props.name}</p>
            </div> */}

            <div className={classes['artist-card']}>
                <div className={classes['artist-info']}>
                    <p className={classes['artist-name']}>{props.name}</p>
                    <div className={classes['genres-list']}>{props.genres.slice(0, 2).map(genre => { return <div className={classes.genre}>{genre} </div> })}</div>
                    {/* <Link target="_blank" href={props.url}>see on spotify</Link> */}
                    {/* <p>{props.followers} followers</p> */}
                    {/* <Tippy content={"The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks."} placement="right" interactive={false} animation="fade" arrow={true} > */}
                    {/* <p>popularity: {props.popularity}/100</p> */}
                    {/* </Tippy> */}
                </div>
                <div>
                    <Image src={props.image} />
                </div>
            </div>

        </Card >
    )
}