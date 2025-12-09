export default function BackgroundBlobs() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            <div className="absolute inset-0 opacity-20 z-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/40 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/40 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/40 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>
    );
}
