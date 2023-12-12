import Nav from './Nav';
import classes from './Layout.module.scss';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <>
            <Nav />
            <main className={classes.main}>{props.children}</main>
            <Footer />
        </>
    );
}
