import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    id: number;
}

export default function ProjectCard({ title, category, image, id }: ProjectCardProps) {
    return (
        <Link href={`/works/${id}`} className="group block relative overflow-hidden rounded-xl bg-card-bg">
            <div className="aspect-video relative overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                        View Project
                    </span>
                </div>
            </div>
            <div className="p-4">
                <p className="text-sm text-primary font-medium mb-1">{category}</p>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
            </div>
        </Link>
    );
}
