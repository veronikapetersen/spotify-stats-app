import classes from './SectionWrapper.module.scss';

export default function SectionWrapper(props) {

    return (
        <div className={classes.sectionwrapper}>
            {props.children}
        </div>
    )
}