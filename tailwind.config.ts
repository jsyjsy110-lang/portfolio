import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                foreground: "#ffffff",
                primary: "#FF9A9E", // Vibrant Pink
                secondary: "#A18CD1", // Soft Purple
                accent: "#FF0055", // Deep Red
                "card-bg": "rgba(255, 255, 255, 0.05)",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                serif: ["var(--font-dm-serif)"],
            },
            animation: {
                "blob": "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
