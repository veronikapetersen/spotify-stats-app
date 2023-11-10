import classes from './Section.module.scss';

export default function Section(props) {

    return (
        <section className={`${classes.section} ${props.rounded ? classes.rounded : ''}`}>
            {props.children}
        </section>
    )
}