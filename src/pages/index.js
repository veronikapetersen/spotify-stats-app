// const HomePage = () => {

//     return <div>
//         <h1>Hey</h1>
//         <p>hey again</p>
//     </div>
// };

// export default HomePage;



// pages/index.js

import { useEffect, useState } from "react";

export default function Home() {
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
    <div>
      <h1>Home Page</h1>
      <h2>Artists Stats</h2>
      <ul>
        {data.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      {/* Add other content as needed */}
    </div>
  );
}
