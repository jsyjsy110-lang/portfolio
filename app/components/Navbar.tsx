import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
                    PORTFOLIO
                </Link>
                <div className="flex gap-8">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/works" className="text-sm font-medium hover:text-primary transition-colors">
                        Works
                    </Link>
                </div>
            </div>
        </nav>
    );
}
