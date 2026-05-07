import { client } from "../sanity/lib/sanityFetch";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectList from "../components/ProjectList";
import Steps from "@/components/Steps";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WpContact from "@/components/WpContact";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags?: string[];
}

async function getProjects(): Promise<Project[]> {
  const query = '*[_type == "project"]{title,description,"imageUrl":image.asset->url,link,tags}';  
  const data = await client.fetch<Project[]>(query);
  return data;
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f172a]">
      <Navbar />
      <Hero />
      <ProjectList projects={projects} />
      <Steps />
      <ContactForm />
      <WpContact />
      <Footer />      
    </main>
  );
}