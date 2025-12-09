import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";

export default function Home() {
    return (
        <main className="min-h-screen pt-20 animate-fade-in">
            <Navbar />
            <Hero />
            <ProjectGrid />
        </main>
    );
}
