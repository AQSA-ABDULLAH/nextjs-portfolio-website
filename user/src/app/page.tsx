import FAQ from "@/sections/faqs/faqs";
import Hero from "@/sections/hero/hero";
import Projects from "@/sections/projects/projects";
import Statics from "@/sections/statics/statics";

export default function Home() {
  return (
    <>
      <Hero/>
      <Statics/>
      <Projects/>
      <FAQ/>
    </>
  );
}
