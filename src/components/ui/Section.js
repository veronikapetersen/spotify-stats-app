import classes from './Section.module.css';

export default function Section(props) {

    return (
        <div className={classes.section}>
            {props.children}
        </div>
    )
}