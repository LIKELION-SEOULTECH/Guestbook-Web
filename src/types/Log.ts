export interface Log {
    id: number;
    userName: string;
    content: string;
    emotion: "공포" | "놀람" | "분노" | "슬픔" | "중립" | "행복" | "혐오";
    createdAt: string;
    updatedAt: string;
}
