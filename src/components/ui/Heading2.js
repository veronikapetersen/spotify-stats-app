import classes from './Heading2.module.scss';
export default function Heading2(props) {
    return (
        <>
            <h2 className={classes['h2']}>{props.children}</h2>
        </>
    );
}