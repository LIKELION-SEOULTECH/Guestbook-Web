export interface Log {
    id: number;
    userName: string;
    content: string;
    emotion:
        | "HORROR"
        | "SURPRISE"
        | "ANGER"
        | "SORROW"
        | "NEUTRALITY"
        | "HAPPINESS"
        | "AVERSION";
    createdAt: string;
    updatedAt: string;
}
