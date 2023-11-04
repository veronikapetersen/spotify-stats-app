import classes from './SectionWrapper.module.css';

export default function SectionWrapper(props) {

    return (
        <div className={classes.sectionwrapper}>
            {props.children}
        </div>
    )
}