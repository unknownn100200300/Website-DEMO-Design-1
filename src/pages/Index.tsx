import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechnologySection from "@/components/TechnologySection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ProductShowcase from "@/components/ProductShowcase";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";
import { Layout } from "antd";

const Index = () => {
  return (
    <Layout className="min-h-screen bg-background" style={{ background: "transparent" }}>
      <Navbar />
      <Layout.Content className="pt-16">
        <HeroSection />
        <SolutionsSection />
        <IndustriesSection />
        <TechnologySection />
        <GlobalPresenceSection />
        <ProductShowcase />
        <StatsSection />
        <FooterSection />
      </Layout.Content>
    </Layout>
  );
};

export default Index;
