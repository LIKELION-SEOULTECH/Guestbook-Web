import { Log } from "@/types/Log";

// 감정에 따른 이모지 매핑
const emotionIcons: Record<Log["emotion"], string> = {
    HORROR: "😱",
    SURPRISE: "😮",
    ANGER: "😡",
    SORROW: "😢",
    NEUTRALITY: "😐",
    HAPPINESS: "😀",
    AVERSION: "🤢",
};

interface EmotionIconProps {
    emotion: Log["emotion"];
}

export function EmotionIcon({ emotion }: EmotionIconProps) {
    return (
        <div className={`emotion ${emotion.toLowerCase()}`}>
            {emotionIcons[emotion]}
        </div>
    );
}
