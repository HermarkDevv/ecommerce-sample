import CollectionSection from "@/components/homePageSections/CollectionSection";
import DesignersLogoSection from "@/components/homePageSections/DesignersLogoSection";
import HeroSection from "@/components/homePageSections/HeroSection"

export default function Home() {
  return (
    <div className=" bg-zinc-50">
      <HeroSection />
      <DesignersLogoSection />
      <CollectionSection Title="new arrivals" />
      <hr className="bg-gray-100 my-5" />
      <CollectionSection Title="top selling" />
    </div>
  );
}
