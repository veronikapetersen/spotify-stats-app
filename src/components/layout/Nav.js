import Link from 'next/link';
import classes from './Nav.module.css';

function Nav(props) {
    return (<header className={classes.header}>

        <div className={classes.logo}>
            <div className={classes['logo-icon']}>&#x1F3A7;</div>
            {/* <div className={classes['logo-icon']}>&#129705;</div> */}
            <div className={classes['logo-text']}>Spotify Stats</div>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/'>	Nav Link</Link>
                </li>
                {/* <li>
                    <Link href='/new-meetup'>Add New Meetup</Link>
                </li> */}
            </ul>
        </nav>
    </header>)
}

export default Nav;