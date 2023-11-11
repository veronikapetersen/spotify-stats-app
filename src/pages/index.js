// import Roboto from "@/utils/fonts";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ArtistList from "@/components/Artists/ArtistList";
import TrackList from "@/components/Tracks/TrackList";
import ColorChange from "@/components/Artists/ColorChange";
import Hero from "@/components/ui/Hero";
import Quote from "@/components/ui/Quote";
import SpotlightTrack from "@/components/Spotlight/SpotlightTrack";

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
              <SpotlightTrack />
            </SectionWrapper>
          </Section>
        </ColorChange>

        <ColorChange
          color="#AD96DC"
          start="top 40%"
          end="bottom 60%"
          toggleActions="play none play reverse"
          markers={false}>
          <Section>
            <SectionWrapper>
              <ArtistList />
            </SectionWrapper>
          </Section>
        </ColorChange>

        <Section>
          <SectionWrapper>
            <Quote />
          </SectionWrapper>
        </Section>

        <Section
          rounded={true}>
          <SectionWrapper>
            <TrackList />
          </SectionWrapper>
        </Section>
        
      </Layout>
    </>
  );
}
