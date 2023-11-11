import classes from './RecentlyPlayed.module.scss';

import { useEffect, useState } from "react";

export default function RecentlyPlayed() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api/recently-played")
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    console.log(data)



    return (
        <div className={classes.sectionwrapper}>
            <h2>Recently Played</h2>
            <ul>
                {data.map((track) => (
                    <li key={track.id}>
                        <p>{track.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}