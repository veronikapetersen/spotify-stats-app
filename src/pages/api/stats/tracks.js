import { topTracks } from "../../../lib/spotify";

export default async function handler(req, res) {
    const response = await topTracks();
    const { items } = await response.json();

    console.log(items.slice(0, 2));

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