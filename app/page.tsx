import { Landing } from "@/components/Landing";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Landing />
      <Philosophy />
      <Services />
      <Cases />
      <Contact />
      <Footer />
    </>
  );
}
