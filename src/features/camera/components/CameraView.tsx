import { useState } from 'react';

import CountdownOverlay from './CountdownOverlay';

import FlipCameraIcon from '@/components/icons/FlipCameraIcon';
import Button from '@/components/ui/Button';
import { useCamera } from '../hooks/useCamera';
import { PolaroidFrame } from '@/components/ui/PolaroidFrame';


interface CameraViewProps {
    onPhotoCaptured: (photoDataUrl: string) => void;
}

export function CameraView({ onPhotoCaptured }: CameraViewProps) {
    const { videoRef, takePhoto, flipCamera, error, isReady } = useCamera();
    const [isCountingDown, setIsCountingDown] = useState(false);

    const handleCapture = () => {
        setIsCountingDown(true);
    };

    const handleCountdownFinish = () => {
        const photo = takePhoto();
        if (photo) {
            onPhotoCaptured(photo);
        }
        setIsCountingDown(false);
    };

    return (
        <div className="relative w-full max-w-md flex flex-col items-center">
        <p className="cute-text text-2xl absolute -top-4 z-20 bg-pink-200 px-2 py-1 rounded-md">smile for the camera!</p>

        <PolaroidFrame>
            <div className="relative w-full h-full">
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className={`w-full h-full object-cover transform scale-x-[-1] transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}
                />
                {isCountingDown && <CountdownOverlay onFinish={handleCountdownFinish} />}
            </div>
        </PolaroidFrame>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        
        <div className="mt-8 flex items-center space-x-4">
            <button 
                onClick={flipCamera} 
                className="p-3 rounded-full bg-white border-2 border-black shadow-md transition-transform hover:scale-110 active:scale-95"
                aria-label="Flip camera"
            >
                <FlipCameraIcon className="w-6 h-6" />
            </button>
            <Button onClick={handleCapture} disabled={isCountingDown}>
                Take Photo 📸
            </Button>
        </div>
    </div>
    );
}
