"use client";


import Header from "@/components/Header";

export default function HeroCareers2({logo}) {
  return (
    <section className="relative w-full min-h-[24vh] px-6 bg-transparent overflow-hidden">
      <Header className="relative z-50"  logo={`${logo || '/logo-career.png'}`}/>
    </section>
  );
}
