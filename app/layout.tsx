import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import BackgroundBlobs from "./components/BackgroundBlobs";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-dm-serif"
});

export const metadata: Metadata = {
    title: "Visual Art Portfolio",
    description: "A premium portfolio for visual arts",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${dmSerif.variable} font-sans`}>
                <BackgroundBlobs />
                {children}
            </body>
        </html>
    );
}
