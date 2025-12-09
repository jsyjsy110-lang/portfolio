import ProjectCard from "./ProjectCard";

const PROJECTS = [
    {
        id: 1,
        title: "Neon Dreams",
        category: "Motion Graphics",
        image: "https://placehold.co/600x400/1a1a1a/FFF?text=Neon+Dreams",
    },
    {
        id: 2,
        title: "Future UI Kit",
        category: "UI/UX Design",
        image: "https://placehold.co/600x400/1a1a1a/FFF?text=Future+UI",
    },
    {
        id: 3,
        title: "Abstract Flow",
        category: "Visual Art",
        image: "https://placehold.co/600x400/1a1a1a/FFF?text=Abstract+Flow",
    },
    {
        id: 4,
        title: "Brand Identity",
        category: "Branding",
        image: "https://placehold.co/600x400/1a1a1a/FFF?text=Brand+Identity",
    },
    {
        id: 5,
        title: "Digital Campaign",
        category: "Marketing",
        image: "https://placehold.co/600x400/1a1a1a/FFF?text=Digital+Campaign",
    },
    {
        id: 6,
        title: "3D Character",
        category: "3D Modeling",
        image: "https://placehold.co/600x400/1a1a1a/FFF?text=3D+Character",
    },
];

export default function ProjectGrid() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12">Selected Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
