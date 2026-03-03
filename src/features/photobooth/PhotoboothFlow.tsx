"use client";

import { useState } from "react";
import { Landing } from "../landing";
import {
    CameraView,
    CameraPermission,
    PhotoPreview,
    PhotoDownload,
} from "../camera";

type Stage = "landing" | "permission" | "camera" | "preview" | "download";

export default function PhotoboothFlow() {
    const [stage, setStage] = useState<Stage>("landing");
    const [photo, setPhoto] = useState<string | null>(null);
    const [caption, setCaption] = useState<string>("");

    const handlePhotoCaptured = (capturedPhoto: string) => {
        setPhoto(capturedPhoto);
        setStage("preview");
    };

    return (
        <>
            {stage === "landing" && (
                <Landing onNext={() => setStage("permission")} />
            )}

            {stage === "permission" && (
                <CameraPermission onNext={() => setStage("camera")} />
            )}

            {stage === "camera" && (
                <CameraView onPhotoCaptured={handlePhotoCaptured} />
            )}

            {stage === "preview" && photo && (
                <PhotoPreview
                    photo={photo}
                    onNext={() => setStage("download")}
                    onRetake={() => setStage("camera")}
                />
            )}

            {stage === "download" && photo && (
                <PhotoDownload
                    photo={photo}
                    caption={caption}
                    setCaption={setCaption}
                    onRetake={() => setStage("camera")}
                />
            )}
        </>
    );
}
