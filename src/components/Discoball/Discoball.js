import { useEffect, useRef } from 'react';
import classes from './DiscoBall.module.scss';

export default function DiscoBall() {
    const discoBallRef = useRef(null);

    useEffect(() => {
        var radius = 50;
        var squareSize = 6.5;
        var prec = 19.55;
        var fuzzy = 0.001;
        var inc = (Math.PI - fuzzy) / prec;

        for (var t = fuzzy; t < Math.PI; t += inc) {
            var z = radius * Math.cos(t);
            var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
            var circumference = Math.abs(2 * Math.PI * currentRadius);
            var squaresThatFit = Math.floor(circumference / squareSize);
            var angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
            for (var i = angleInc / 2 + fuzzy; i < (Math.PI * 2); i += angleInc) {
                createSquare(t, i, z, squareSize, radius);
            }
        }
    }, []);

    const createSquare = (t, i, z, squareSize, radius) => {
        var square = document.createElement("div");
        square.className = classes.square;
        var squareTile = document.createElement("div");
        setSquareStyle(squareTile, squareSize, i, t);
        setSquareAnimation(squareTile);
        positionSquare(square, i, t, z, radius);
        square.appendChild(squareTile);
        discoBallRef.current.appendChild(square);
    };


    const setSquareStyle = (squareTile, squareSize, i, t) => {
        squareTile.style.width = squareSize + "px";
        squareTile.style.height = squareSize + "px";
        squareTile.style.transformOrigin = "0 0 0";
        squareTile.style.transform = `rotate(${i}rad) rotateY(${t}rad)`;
        squareTile.style.backgroundColor = randomColor(t > 1.3 && t < 1.9);
    };

    const setSquareAnimation = (squareTile) => {
        squareTile.style.animation = `reflect 2s linear infinite`;
        squareTile.style.animationDelay = `${randomNumber(0, 20) / 10}s`;
        squareTile.style.backfaceVisibility = "hidden";
    };

    const positionSquare = (square, i, t, z, radius) => {
        var x = radius * Math.cos(i) * Math.sin(t);
        var y = radius * Math.sin(i) * Math.sin(t);
        square.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
    };

    const randomColor = (bright) => {
        var c = bright ? randomNumber(130, 255) : randomNumber(110, 190);
        return `rgb(${c}, ${c}, ${c})`;
    };

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <div className={classes.discoBallContainer}>
            <div className={classes.discoBallLight}></div>
            <div ref={discoBallRef} className={classes.discoBall}>
                <div className={classes.discoBallMiddle}></div>
            </div>
        </div>
    );
};
