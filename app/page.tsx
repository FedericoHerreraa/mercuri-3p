import { Landing } from "@/components/Landing";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { StatsMarquee } from "@/components/StatsMarquee";
import { CasesCTA } from "@/components/CasesCTA";
import { ProposalCTA } from "@/components/ProposalCTA";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Landing />
      <Philosophy />
      <Services />
      <ProposalCTA />
      <Testimonials />
      <StatsMarquee />
      <CasesCTA />
      <ContactCTA />
      <Footer />
    </>
  );
}
