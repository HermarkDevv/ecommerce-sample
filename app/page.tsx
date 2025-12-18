import DesignersLogoSection from "@/components/homePageSections/DesignersLogoSection";
import HeroSection from "@/components/homePageSections/HeroSection"

export default function Home() {
  return (
    <div className=" bg-zinc-50">
      <HeroSection />
      <DesignersLogoSection />
    </div>
  );
}
