import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import WorkflowSection from "@/components/WorkflowSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <WorkflowSection />
        <CTASection />
      </main>
      <Footer />
      
      {/* Add a temporary navigation link for testing */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link 
          to="/app" 
          className="bg-opsynth-600 hover:bg-opsynth-700 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Go to App Platform
        </Link>
      </div>
    </div>
  );
};

export default Index;
