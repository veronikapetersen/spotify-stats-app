import { currentlyPlayingSong } from "../../lib/spotify";

export default async function handler(req, res) {
    try {
        const response = await currentlyPlayingSong(req);

        if (!response || response.item === null) {
            return res.status(200).json({ isPlaying: false });
        }

        const { item, is_playing } = response;
        const isPlaying = is_playing;
        const title = item.name;
        const artist = item.artists.map((_artist) => _artist.name).join(", ");
        const album_name = item.album.name;
        const album_type = item.album.album_type;
        const albumImageUrl = item.album.images[0].url;

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
    } catch (error) {
        console.error('Error in now-playing:', error);
        return res.status(200).json({ isPlaying: false });
    }
}
