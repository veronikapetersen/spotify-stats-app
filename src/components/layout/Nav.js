import classes from './Nav.module.scss';

import { signOut } from 'next-auth/react';

export default function Nav() {

    const handleLogout = () => {
        signOut({ callbackUrl: '/' });
    }

    return (<header className={classes.header}>
        <div className={classes.logo}>
            <div className={classes['logo-icon']}>&#129705;</div>
            <div className={classes['logo-text']}>Spotify Stats</div>
        </div>

        <nav>
            <ul>
                <li>
                    <button className={classes['logout-btn']} onClick={handleLogout}>Log out</button>
                </li>
            </ul>
        </nav>
    </header>)
}
