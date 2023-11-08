import Nav from './Nav';
import classes from './Layout.module.scss';

export default function Layout(props) {
    return (
        <div>
            <Nav />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}
