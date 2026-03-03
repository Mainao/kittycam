import Image from "next/image";

export default function CatStickerCute({className}: {className?: string}) {
    return (
        <Image
            src="/images/cat-sticker-cute.png"
            alt="MeowSnap cat mascot"
            width={50}
            height={50}
            className={`w-50 h-50 ${className}`}
        />
    );
}
