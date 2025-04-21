
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Criteria } from "@/components/Criteria";
import { Prizes } from "@/components/Prizes";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <div id="about">
        <About />
      </div>
      
      <div id="timeline">
        <Timeline />
      </div>
      
      <div id="criteria">
        <Criteria />
      </div>
      
      <div id="prizes">
        <Prizes />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
