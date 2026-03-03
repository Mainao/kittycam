import Image from "next/image";

type StickerVariant = "default" | "sad" | "camera";

const STICKERS: Record<StickerVariant, { src: string; alt: string; priority?: boolean }> = {
    default: { src: "/images/cat-sticker.webp",        alt: "KittyCam cat mascot",      priority: true },
    sad:     { src: "/images/cat-sticker-sad.webp",    alt: "Sad KittyCam cat" },
    camera:  { src: "/images/cat-sticker-camera.webp", alt: "KittyCam cat with camera" },
};

export default function CatSticker({ variant = "default" }: { variant?: StickerVariant }) {
    const { src, alt, priority } = STICKERS[variant];
    return (
        <Image
            src={src}
            alt={alt}
            width={579}
            height={386}
            unoptimized
            priority={!!priority}
            className="w-75 h-auto"
        />
    );
}
