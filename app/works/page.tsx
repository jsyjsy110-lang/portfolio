import Navbar from "../components/Navbar";
import ProjectGrid from "../components/ProjectGrid";

export default function Works() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />
            <div className="px-6 py-10 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">All Works</h1>
                <p className="text-gray-400 mb-12">A collection of my visual art projects.</p>
            </div>
            <ProjectGrid />
        </main>
    );
}
