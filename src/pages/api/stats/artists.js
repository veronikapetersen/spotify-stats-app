import { topArtists } from "../../../lib/spotify";

export default async function handler(req, res) {
  const response = await topArtists();
  const { items } = await response.json();

  const artists = items.slice(0, 10).map((artist, index) => ({
    rank: index + 1,
    name: artist.name,
    url: artist.external_urls.spotify,
    coverImage: artist.images[1],
    genres: artist.genres,
    id: artist.id,
    popularity: artist.popularity
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json(artists);
}