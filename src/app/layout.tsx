import type { Metadata } from "next";
import { Gaegu, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const gaegu = Gaegu({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const notoSansMono = Noto_Sans_Mono({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["400", "600"],
});

export const metadata: Metadata = {
    title: "MeowSnap",
    description: "Cute polaroid camera app with a cat photographer 🐾",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${gaegu.variable} ${notoSansMono.variable} antialiased h-full`}
            >
                <div className="font-sans text-center text-gray-800 w-screen h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
                    {children}
                </div>
            </body>
        </html>
    );
}
