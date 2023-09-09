import classes from './Img.module.css';

export default function Image(props) {
    return (
        <img className={classes.image} src={props.src}>
        </img>
    )
}