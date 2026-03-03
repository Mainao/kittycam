import Image from "next/image";

export default function CatStickerCamera() {
    return (
        <Image
            src="/images/cat-sticker-camera.webp"
            alt="MeowSnap cat mascot"
            width={579}
            height={386}
            className="w-75 h-auto"
        />
    );
}
