import classes from "./ArtistList.module.css";

import Artist from "./Artist";

import { useEffect, useState } from "react";

export default function ArtistList() {

    const [data, setData] = useState([]);
    useEffect(() => {
        // Fetch data from your API endpoint
        fetch("/api/stats/artists")
            .then((response) => response.json())
            .then((result) => {
                setData(result); // Store the fetched data in state
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <ul className={classes['artist-list']}>

            {data.map((artist) => (
                <li key={artist.id}>
                    <Artist
                        name={artist.name}
                        image={artist.coverImage.url}
                    />
                </li>
            ))
            }
        </ul >
    )
}