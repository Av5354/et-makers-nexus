import { createFileRoute } from "@tanstack/react-router";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import CoffeeTableBook from "@/components/CoffeeTableBook";
import SelectionCriteria from "@/components/SelectionCriteria";
import DiscussionThemes from "@/components/DiscussionThemes";
import WhoShouldAttend from "@/components/WhoShouldAttend";
import WhyAttend from "@/components/WhyAttend";
import SelectionProcess from "@/components/SelectionProcess";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const title = "ET Edge Best Manufacturing Brands 2026 | 29 Sept, Mumbai";
const description =
  "Celebrating the Makers of India: Manufacturing Excellence, Innovation & Impact. 29th September 2026 | Mumbai.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <CoffeeTableBook />
        <SelectionCriteria />
        <DiscussionThemes />
        <WhoShouldAttend />
        <WhyAttend />
        <SelectionProcess />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
