// import Roboto from "@/utils/fonts";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import ArtistList from "@/components/Artists/ArtistList";
import TrackList from "@/components/Tracks/TrackList";
import CurrentlyPlaying from "@/components/CurrentlyPlaying/CurrentlyPlaying";
import ColorChange from "@/components/Artists/ColorChange";

export default function HomePage() {
  return (
    <Layout>
      <Section>
        <CurrentlyPlaying />
      </Section>

      <ColorChange
        color={"green"}>
        <Section>
          <TrackList />
        </Section>
      </ColorChange>
      <Section>
        <ArtistList />
      </Section>
    </Layout>
  );
}
