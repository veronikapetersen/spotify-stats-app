import classes from './Login.module.scss';
// import DiscoBall from '../Discoball/Discoball'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push('/home')
        }
    }, [session, router])

    return (
        <>
            {!session && (
                <div className={classes['login-page-wrapper']}>
                    {/* <div><DiscoBall /></div> */}

                    <div className={classes['main-element-container']}>
                        <span className={classes.borderline}></span>
                        <div className={classes['inner-container']}>
                            <button className={classes['login-button']} onClick={() => signIn('spotify')}>Log In with Spotify</button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};