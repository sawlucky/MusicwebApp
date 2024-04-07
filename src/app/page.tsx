import FeaturedCourse from "@/components/FeaturedCourse";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased ">
        <Hero />
        <FeaturedCourse />
      </main>
    </>
  );
};

export default page;
