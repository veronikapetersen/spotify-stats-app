// import Roboto from "@/utils/fonts";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ArtistList from "@/components/Artists/ArtistList";
import TrackList from "@/components/Tracks/TrackList";
import CurrentlyPlaying from "@/components/CurrentlyPlaying/CurrentlyPlaying";
import ColorChange from "@/components/Artists/ColorChange";
import Hero from "@/components/ui/Hero";
import ArtistListNew from "@/components/Artists/ArtistListNew";

export default function HomePage() {
  return (

    <>
      <Layout>
        <Hero />
        <ColorChange
          color="#AD96DC"
          start="top 30%"
          end="bottom 40%"
          toggleActions="none play reverse none"
          markers={false}>
          <Section>
            <SectionWrapper>
              <CurrentlyPlaying />
            </SectionWrapper>
          </Section>
        </ColorChange>

        <ColorChange
          color="#AD96DC"
          start="top 40%"
          end="bottom 60%"
          toggleActions="play reverse play reverse"
          markers={false}>
          <Section>
            <SectionWrapper>
              <ArtistList />
            </SectionWrapper>
          </Section>
        </ColorChange>

        <Section>
          <SectionWrapper>
            <TrackList />
          </SectionWrapper>
        </Section>

        {/* <ArtistListNew></ArtistListNew> */}
      </Layout>
    </>
  );
}
