import classes from './Quote.module.scss';

export default function Quote() {
    return (
        <>
            <div>
                <p className={classes['quote-text']}>Quote</p>
                <div className={classes['quote-section-one']}></div>
                <div className={classes['quote-section-two']}></div>
            </div>
        </>
    )
}