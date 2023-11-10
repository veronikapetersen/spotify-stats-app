import classes from './Hero.module.scss';

export default function Hero() {
    return (
        // <div className={classes['hero-wrapper']}>
        <div className={classes.hero}>
            <h1 className={classes.title}>Unveil Your Musical Preferences</h1>
            <p className={classes.text}>
                Deep dive into your Spotify listening habits. Find out your top artists, tracks, genres, and more.
            </p>
            {/* <div className={classes['quote-section-one']}></div> */}
        </div >
        // </div >
    )
}