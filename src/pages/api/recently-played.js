import { recentlyPlayed } from "../../lib/spotify";

export default async function handler(req, res) {

    const response = await recentlyPlayed();
    const { items } = await response.json();

    const recentlyPlayedSongs = items.slice(0, 2).map((recent) => ({

        title: recent.track.name,
        artist: recent.track.artists.map((_artist) => _artist.name).join(", "),
        album_name: recent.track.album.name,
        albumImageUrl: recent.track.album.images[0].url,
        album_type: recent.track.album.album_type,
    }));

    res.setHeader(
        "Cache-Control",
        "public, s-maxage=86400, stale-while-revalidate=43200"
    );

    return res.status(200).json(recentlyPlayedSongs[0]);
}