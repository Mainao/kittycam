import type { Metadata } from "next";
import { Gaegu, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const gaegu = Gaegu({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

const notoSansMono = Noto_Sans_Mono({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "KittyCam",
    description: "Cute polaroid camera app with a cat photographer 🐾",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full">
            <head>
                {/* Preload LCP image — component is client-rendered so next/image priority won't preload server-side */}
                <link rel="preload" href="/images/cat-sticker.webp" as="image" fetchPriority="high" />
            </head>
            <body
                className={`${gaegu.variable} ${notoSansMono.variable} antialiased h-full`}
            >
                <div className="text-center text-gray-800 w-screen h-[100dvh] flex flex-col items-center justify-center p-4 overflow-hidden">
                    {children}
                </div>
            </body>
        </html>
    );
}
