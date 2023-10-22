import classes from './Hero.module.css';

export default function Hero() {
    return (
        <div className={classes.hero}>
            <h1 className={classes.title}>Hero Lorem Ipsum</h1>
            <p className={classes.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                voluptatibus, voluptatem, quas.
            </p>
        </div>
    )
}