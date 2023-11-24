import Link from 'next/link'
import classes from "./Artist.module.scss";
import Card from "@/components/ui/Card";
import Image from "@/components/ui/Img";

export default function Artist(props) {
    return (
        <Card>
            <div className={classes['artist-card']}>

                <div className={classes['artist-info']}>
                    <div className={classes['artist__name']}>
                        <Link className={classes['artist__link']} target="_blank" href={props.url}>
                            #{props.rank}. {props.name}
                        </Link>
                    </div>
                    <div className={classes['artist__genres']}>
                        {props.genres.slice(0, 2).map(genre => {
                            return <div className={classes.genre}>{genre}</div>
                        })}
                    </div>
                </div>
                
                <div>
                    <Image src={props.image} />
                </div>
            </div>
        </Card >
    )
}