
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import JobListings from "@/components/careers/JobListings";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <CareersHero />
        <JobListings />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
