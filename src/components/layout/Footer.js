
import Link from 'next/link'
import classes from "./Footer.module.scss";

export default function Footer() {

    return (
        <>
            <div className={classes.placeholder}></div>
            <footer className={classes.footer} >
                <div className={classes['footer-content']}>
                    <div className={classes['contact-info']}>
                        <Link href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                        <Link href="https://github.com/yourusername/your-app-repo" target="_blank" rel="noopener noreferrer">GitHub</Link>
                        <Link href="mailto:your.email@example.com">Email</Link>
                        <Link href="https://www.yourportfolio.com" target="_blank" rel="noopener noreferrer">Portfolio</Link>
                        <Link href="https://www.buymeacoffee.com/veronikaaa">Buy me a coffee</Link>
                    </div>
                </div>

                <div className={classes['copyright-info']}>
                    <p>&copy; 2023 Veronika Petersen</p>
                </div>
            </footer >
        </>
    )
};