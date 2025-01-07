export type ScaleTable = {
    numbers: {
        id: number;
        numberInPlan: number;
        numberInReality: number | undefined;
        correct: boolean | undefined;
    }[];
    multiplier: number;
    finish: boolean,
}