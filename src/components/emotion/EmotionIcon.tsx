import { Log } from "@/types/Log";

// 감정에 따른 이모지 매핑
const emotionIcons: Record<Log["emotion"], string> = {
    공포: "😱",
    놀람: "😮",
    분노: "😡",
    슬픔: "😢",
    중립: "😐",
    행복: "😀",
    혐오: "🤢",
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
