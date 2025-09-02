import { Landing } from "@/components/Landing";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { CasesCTA } from "@/components/CasesCTA";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Landing />
      <Philosophy />
      <Services />
      <CasesCTA />
      <ContactCTA />
      <Footer />
    </>
  );
}
