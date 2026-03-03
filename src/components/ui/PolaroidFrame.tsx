import React from 'react';
import { cn } from '@/lib/utils';

interface PolaroidFrameProps {
    children: React.ReactNode;
    captionSlot?: React.ReactNode;
    className?: string;
}

export function PolaroidFrame({ children, captionSlot, className }: PolaroidFrameProps) {
    return (
        <div className={cn("relative bg-white p-4 pb-16 shadow-xl w-full max-w-md rounded-lg border-gray-100 border", className)}>
            <div className="bg-gray-900 w-full aspect-square flex items-center justify-center overflow-hidden">
                {children}
            </div>
            {captionSlot && <div className="absolute bottom-4 left-4 right-4 h-12">{captionSlot}</div>}
        </div>
    );
};
