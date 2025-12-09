import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
            <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-6">
                    Visual <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Storyteller
                    </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-sans">
                    Creating immersive digital experiences through video, motion graphics, and interaction design.
                </p>
                <Link
                    href="/works"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-transform hover:scale-105 hover:bg-gray-200 font-sans"
                >
                    View Selected Works
                </Link>
            </div>
        </section>
    );
}
