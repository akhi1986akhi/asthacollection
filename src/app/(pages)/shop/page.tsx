import AgeGroupSection from "@/_components/AgeGroupSection";
import CategorySection from "@/_components/CategorySection";
import GoogleReviewsSection from "@/_components/GoogleReviewsSection";
import HeroSection from "@/_components/HeroSection";
import LatestBlogSection from "@/_components/LatestBlogSection";
import PremiumSection from "@/_components/PremiumSection";
import TestimonialsSection from "@/_components/TestimonialsSection";
import TrendingSection from "@/_components/TrendingSection";


export default function ShopPage() {
  return (
        <>
        <HeroSection />
        <CategorySection />
        <AgeGroupSection />
        <PremiumSection/>
        <TrendingSection />
        <TestimonialsSection />
        <LatestBlogSection/>
        <GoogleReviewsSection />
        </>
  );
}