import CollectionSection from "@/components/homePageSections/CollectionSection"
import DesignersLogoSection from "@/components/homePageSections/DesignersLogoSection"
import HeroSection from "@/components/homePageSections/HeroSection"
import SectionCollage from "@/components/homePageSections/SectionCollage"
import CustomerReviewSection from "@/components/homePageSections/CustomerReviewSection"

export default function Home() {
  return (
    <div className=" bg-zinc-50 pb-10">
      <HeroSection />
      <DesignersLogoSection />
      <CollectionSection Title="new arrivals" />
      <hr className="bg-gray-100 my-5" />
      <CollectionSection Title="top selling" />
      <SectionCollage />
      <CustomerReviewSection />
    </div>
  );
}
