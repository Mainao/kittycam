import Button from "@/components/ui/Button";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";
import React, { useCallback } from "react";

interface PhotoDownloadProps {
    photo: string;
    caption: string;
    setCaption: (caption: string) => void;
    onRetake: () => void;
}

export function PhotoDownload({
    photo,
    caption,
    setCaption,
    onRetake,
}: PhotoDownloadProps) {
    const date = new Date().toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
    });

    const downloadPolaroid = useCallback(() => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = photo;
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const frameWidth = 800;
            const frameHeight = 1000;
            const padding = 40;
            const imageWidth = frameWidth - (padding * 2);
            const imageHeight = imageWidth;

            canvas.width = frameWidth;
            canvas.height = frameHeight;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, frameWidth, frameHeight);
            ctx.strokeStyle = '#e0e0e0';
            ctx.lineWidth = 1;
            ctx.strokeRect(0, 0, frameWidth, frameHeight);

            ctx.drawImage(image, padding, padding, imageWidth, imageHeight);

            ctx.fillStyle = '#212121';
            ctx.font = '50px Gaegu';
            ctx.textAlign = 'center';
            ctx.fillText(caption, frameWidth / 2, frameHeight - 80, imageWidth - 20);

            ctx.fillStyle = '#757575';
            ctx.font = '24px Gaegu';
            ctx.textAlign = 'right';
            ctx.fillText(date, frameWidth - padding, frameHeight - 30);

            const link = document.createElement('a');
            link.download = 'meow-snap.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
        image.onerror = (err) => {
            console.error('Failed to load image for canvas download:', err);
        };
    }, [photo, caption, date]);

    return (
        <div className="flex flex-col items-center space-y-4 w-full max-w-md">
            <p className="cute-text text-3xl">add a lil note!</p>
            <PolaroidFrame
                captionSlot={
                    <div className="flex flex-col justify-end h-full">
                        <input
                            type="text"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder="write something cute..."
                            className="cute-text text-2xl text-center bg-transparent w-full focus:outline-none"
                        />
                        <p className="cute-text text-sm text-gray-500 text-right pr-2">
                            {date}
                        </p>
                    </div>
                }
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={photo}
                    alt="User capture"
                    className="w-full h-full object-cover"
                />
            </PolaroidFrame>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full items-center justify-center pt-4">
                <Button onClick={downloadPolaroid}>Download</Button>
                <button
                    onClick={onRetake}
                    className="cute-text text-lg text-gray-500 hover:text-black"
                >
                    Take another
                </button>
            </div>
        </div>
    );
}
