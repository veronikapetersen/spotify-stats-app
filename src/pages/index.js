import Roboto from "@/utils/fonts";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import ArtistList from "@/components/Artists/ArtistList";
import TrackList from "@/components/Tracks/TrackList";
import CurrentlyPlaying from "@/components/CurrentlyPlaying/CurrentlyPlaying";

export default function HomePage() {
  return (
    <Layout>
      <Section>
        <CurrentlyPlaying />
      </Section>
      <Section>
        <TrackList />
      </Section>
      <Section>
        <ArtistList />
      </Section>
    </Layout>
  );
}
