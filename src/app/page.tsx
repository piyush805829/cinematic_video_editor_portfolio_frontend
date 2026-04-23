import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Dynamic imports for performance
const YouTubeShowcase = dynamic(() => import("@/components/YouTubeShowcase"), {
  loading: () => (
    <div className="py-24 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="h-8 w-48 bg-surface-container-highest rounded animate-pulse mb-4" />
        <div className="h-12 w-96 bg-surface-container-highest rounded animate-pulse mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-surface-container-highest rounded-lg animate-pulse" />
          <div className="aspect-video bg-surface-container-highest rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  ),
});

const ReelsSection = dynamic(() => import("@/components/ReelsSection"), {
  loading: () => (
    <div className="h-screen bg-surface-container-lowest flex items-center justify-center">
      <div className="w-[380px] aspect-[9/16] bg-surface-container-highest rounded-3xl animate-pulse" />
    </div>
  ),
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => (
    <div className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <div className="h-16 w-80 bg-surface-container-highest rounded animate-pulse mx-auto" />
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <YouTubeShowcase />
        <ReelsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
