import NoiseOverlay from "@/components/ui/NoiseOverlay";
import GlobalBackground from "@/components/ui/GlobalBackground";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Navigation from "@/components/layout/Navigation";
import SystemBoot from "@/components/sections/SystemBoot";
import SocialContactBlock from "@/components/sections/SocialContactBlock";
import IdentitySection from "@/components/sections/IdentitySection";
import ArchitectSection from "@/components/sections/ArchitectSection";
import WorksSection from "@/components/sections/WorksSection";
import SkillMatrixSection from "@/components/sections/SkillMatrixSection";
import TimelineSection from "@/components/sections/TimelineSection";
import TrophySection from "@/components/sections/TrophySection";
import TransmitSection from "@/components/sections/TransmitSection";
import FooterSignal from "@/components/layout/FooterSignal";

export default function Home() {
  return (
    <>
      <GlobalBackground />
      <NoiseOverlay />
      <ScrollToTop />
      <Navigation />
      <main>
        <SystemBoot />
        <SocialContactBlock />
        <IdentitySection />
        <ArchitectSection />
        <WorksSection />
        <SkillMatrixSection />
        <TimelineSection />
        <TrophySection />
        <TransmitSection />
      </main>
      <FooterSignal />
    </>
  );
}
