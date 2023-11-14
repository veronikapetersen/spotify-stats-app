import classes from './ConfettiButton.module.scss';
import confetti from "canvas-confetti";

export default function ConfettiButton() {
    const handleConfetti = () => {
        const options = {
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#FFD700', '#4169E1', '#FF6347', '#32CD32']
        };

        confetti(options);
    }

    return (
        <button className={classes['confetti-btn']} onClick={handleConfetti}>Wow!</button>
    )
}