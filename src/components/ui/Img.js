import classes from './Img.module.css';

export default function Image(props) {
    return (
        <img src={props.src} className={classes.image}>
        </img>
    )
}