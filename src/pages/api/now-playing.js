import { currentlyPlayingSong } from "../../lib/spotify";

export default async function handler(req, res) {
    const response = await currentlyPlayingSong();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();

    if (song.item === null) {
        return res.status(200).json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album_name = song.item.album.name;
    const album_type = song.item.album.album_type;
    const albumImageUrl = song.item.album.images[0].url;

    res.setHeader(
        "Cache-Control",
        "public, s-maxage=60, stale-while-revalidate=30"
    );

    return res.status(200).json({
        isPlaying,
        title,
        artist,
        album_name,
        albumImageUrl,
        album_type
    });
}