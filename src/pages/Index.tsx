
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
    </div>
  );
};

export default Index;
