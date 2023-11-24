import classes from './Login.module.scss';
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push('/home')
        }
    }, [session, router])

    const handleLogin = () => {
        signIn('spotify');
    }

    return (
        <>
            {!session && (
                <div className={classes['login-page-wrapper']}>
                    <div className={classes['main-element-container']}>
                        <span className={classes.borderline}></span>
                        <div className={classes['inner-container']}>
                            <div>
                                <div className={classes['logo-icon']}>&#129705;</div>
                                <div className={classes['logo-text']}>Spotify Stats</div>
                            </div>
                            <div>
                                <button className={classes['login-button']} onClick={handleLogin}>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};