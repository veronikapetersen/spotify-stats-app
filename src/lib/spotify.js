import { getSession } from 'next-auth/react';

const fetchFromSpotify = async (url, req) => {
    const session = await getSession({ req });
    const accessToken = session?.user?.accessToken;

    if (!accessToken) {
        throw new Error("User is not authenticated or token has expired");
    }

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const topTracks = async (req) => {
    return fetchFromSpotify("https://api.spotify.com/v1/me/top/tracks", req);
};

export const topArtists = async (req) => {
    return fetchFromSpotify("https://api.spotify.com/v1/me/top/artists", req);
};

export const currentlyPlayingSong = async (req) => {
    return fetchFromSpotify("https://api.spotify.com/v1/me/player/currently-playing", req);
};

export const recentlyPlayed = async (req) => {
    return fetchFromSpotify("https://api.spotify.com/v1/me/player/recently-played", req);
};
