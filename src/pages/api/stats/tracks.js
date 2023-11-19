import { topTracks } from "../../../lib/spotify";

export default async function handler(req, res) {

    try {
        const response = await topTracks(req);
        const items = response.items;

        const tracks = items.slice(0, 5).map((track) => ({
            title: track.name,
            coverImage: track.album.images[1],
            preview: track.preview_url,
            artist: track.artists.map((_artist) => _artist.name).join(", "),
            url: track.external_urls.spotify,
            length: `${Math.floor(track.duration_ms / 60000)}:${((track.duration_ms % 60000) / 1000).toFixed(0)}`,
            explicit: track.explicit,
            album_type: track.album.album_type,
            album_name: track.album.name,
        }));

        res.setHeader(
            "Cache-Control",
            "public, s-maxage=86400, stale-while-revalidate=43200"
        );

        return res.status(200).json(tracks);
    }
    catch (error) {
        console.error('Error fetching top tracks:', error);
        res.status(500).json({ error: error.message });
    }
}