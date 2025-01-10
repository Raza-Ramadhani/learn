export type ScaleTable = {
    numbers: Array<{
        id: number;
        numberInPlan: number;
        numberInReality: number | undefined;
        correct: boolean | undefined;
    }>,
    multiplier: number;
    finish: boolean,
}

export type factorizeType = {
    factorize: Array<number>;
    isPrime: boolean|undefined;
    fieldData: {
        number: number;
    };
    error: null|string;
}