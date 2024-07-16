import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skill from "@/components/Skill";


export default function Home() {
  return (
    <main className="bg-gray-100 bg-gradient-to-br from-gray-200 to-gray-400 w-auto h-screen">
      <Header />
      <Hero />
      <Skill />
      <Project /> 
      <Contact/>
    </main>
  );
}
