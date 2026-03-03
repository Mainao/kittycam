"use client";

import Button from "@/components/ui/Button";

const MESSAGES = {
    default: (
        <>
            <p>Hi There!</p>
            <p>Can I click a cute photo of you?</p>
        </>
    ),
    rejected: (
        <>
            <p>oh… okay…</p>
            <p>i’ll just wait here then 😔</p>
        </>
    ),
} as const;

const BUTTON_TEXT = {
    default: "yes let’s do it 😄",
    rejected: "okay fine… one photo 😭",
} as const;

interface LandingActionsProps {
    rejected: boolean;
    onReject: () => void;
    onAccept: () => void;
}

export function LandingActions({
    rejected,
    onReject,
    onAccept,
}: LandingActionsProps) {
    const message = rejected ? MESSAGES.rejected : MESSAGES.default;
    const acceptText = rejected ? BUTTON_TEXT.rejected : BUTTON_TEXT.default;

    return (
        <div className="flex flex-col items-center gap-4 text-center">
            <div className="cute-text text-3xl md:text-4xl ">{message}</div>

            {!rejected ? (
                <div className="flex gap-4">
                    <Button onClick={onAccept}>{acceptText}</Button>

                    <Button onClick={onReject} variant="secondary">
                        no 🙈
                    </Button>
                </div>
            ) : (
                <Button onClick={onAccept}>{acceptText}</Button>
            )}
        </div>
    );
}
