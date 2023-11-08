import classes from './Img.module.scss';

export default function Image(props) {
    return (
        <img src={props.src} className={classes.image}>
        </img>
    )
}