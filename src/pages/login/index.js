import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push('/')
        }
    }, [session, router])

    return (
        <div>
            {!session && (
                <button onClick={() => signIn('spotify')}>Log in with Spotify</button>
            )}
        </div>
    )
}
