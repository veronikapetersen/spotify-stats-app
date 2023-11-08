import classes from './Card.module.scss';

export default function Card(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}