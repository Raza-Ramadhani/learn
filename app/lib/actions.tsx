'use server'

import { redirect } from "next/navigation";
import { factorizeType, ScaleTable } from "./types";

export async function deKommaCheck(formData: FormData, rawText: string, words: Array<string>) {
    const correctWords = rawText.split(/(\S+\n?)\s*/).filter(Boolean);
    const commas = []
    let everythingCorrect = true
    for (let i = 0; i < words.length; i++) {
        const checkingWord = `${words[i]}${formData.get(i.toString()) == 'on' ? ',' : ''}`
        console.log(JSON.stringify(checkingWord) + " - " + JSON.stringify(correctWords[i]))
        if (correctWords[i] == checkingWord) {
            commas.push({ correct: true, comma: formData.get(i.toString()) == 'on' ? true : false })
        } else {
            commas.push({ correct: false, comma: formData.get(i.toString()) == 'on' ? true : false })
            everythingCorrect = false
        }
    }
    /*
            const sentences = rawText.split('.')
            const sentencesLength = []
            for (let i = 0; i < sentences.length; i++) {
                const wordsInSentence = sentences[i].split(' ')
                const numberOfWordsInSentence = wordsInSentence.length
                sentencesLength.push(numberOfWordsInSentence)
            }
    */
    return { correct: commas, everythingCorrect: everythingCorrect }
}
/*
export async function mNumberCheck(prevState: {randomEinheit:number,randomNumber:number,startUnitIndex:number,randomUnitIndex:number, correct:undefined|boolean},formData:FormData) {
    const lange = [
        {name: 'Gewicht', units: [
            {name: 'Milligramm', symbol:'mg', decimal:0.001},
            {name: 'Gramm', symbol:'g', decimal:1},
            {name: 'Kilogramm', symbol:'kg', decimal:1000},
            {name: 'Kilogramm', symbol:'kg', decimal:1000},
            {name: 'Tonnen', symbol:'t', decimal:1000000},
        ]},
        {name: 'Länge', units: [
            {name: 'Meter', symbol:'m', decimal:1},
            {name: 'Kilometer', symbol:'km', decimal:1000},
            {name: 'Dezimeter', symbol:'dm', decimal:0.1},
            {name: 'Zentimeter', symbol:'cm', decimal:0.01},
            {name: 'Milimeter', symbol:'mm', decimal:0.001},
        ]},
        {name: 'Hohlmassen', units: [
            {name: 'Mililiter', symbol:'ml', decimal:1000},
            {name: 'Zentiliter', symbol:'cl', decimal:100},
            {name: 'Deziliter', symbol:'dl', decimal:10},
            {name: 'Liter', symbol:'l', decimal:1},
            {name: 'Hektoliter', symbol:'hl', decimal:100},
        ]}

    ]
    const userNumber = formData.get('value') as unknown as number
    const multiple = lange[prevState.randomEinheit].units[prevState.randomUnitIndex].decimal / lange[prevState.randomEinheit].units[prevState.startUnitIndex].decimal
    if(prevState.correct == true) {
        return {
            randomEinheit: Math.floor(Math.random() *2),
            randomNumber: Math.floor(Math.random() * 99), 
            startUnitIndex: Math.floor(Math.random() * 4), 
            randomUnitIndex: Math.floor(Math.random() * 4),
            correct: undefined,
        }
    }
    if ((userNumber * multiple) == prevState.randomNumber) {
        return{
            randomEinheit: prevState.randomEinheit,
            randomNumber: prevState.randomNumber, 
            startUnitIndex: prevState.randomNumber, 
            randomUnitIndex: prevState.randomNumber,
            correct: true,
        }
    }
    else {
        return{
            randomEinheit: prevState.randomEinheit,
            randomNumber: prevState.randomNumber, 
            startUnitIndex: prevState.randomNumber, 
            randomUnitIndex: prevState.randomNumber,
            correct: false,
        }
    }
/*        return {
        randomNumber: Math.floor(Math.random() * 4), 
        startUnitIndex: Math.floor(Math.random() * 4), 
        randomUnitIndex: Math.floor(Math.random() * 4),
    }
}
*/
export async function Reload(path: string) {
    redirect(path)
}

export async function GetNumbersScaleTable() {
    const randomMultiplier = Math.floor(Math.random() * 30) + 1
    const rawNumbers = []
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 20)
        rawNumbers.push({ id: i, numberInPlan: randomNumber, numberInReality: undefined, correct: undefined })
    }
    const randomNumber = Math.floor(Math.random() * 20) + 1
    rawNumbers.push({ id: 3, numberInPlan: randomNumber, numberInReality: randomNumber * randomMultiplier, correct: true })
    console.log({ numbers: rawNumbers, multiplier: randomMultiplier })
    return { numbers: rawNumbers, multiplier: randomMultiplier, finish: false } as ScaleTable
}

export async function CheckNumberScaleTable(prevState: ScaleTable, formData: FormData) {
    if (prevState.finish) {
        await GenerateRandomLinkScaleTable()
    }
    const rawNumbers = []
    let wrong = false
    for (let i = 0; i < prevState.numbers.length; i++) {
        console.log(prevState.numbers[i])
        const correctAnswer = prevState.numbers[i].numberInPlan * prevState.multiplier
        const user = formData.get(prevState.numbers[i].id.toString()) as unknown as number
        if (user == correctAnswer) {
            rawNumbers.push({ id: prevState.numbers[i].id, numberInPlan: prevState.numbers[i].numberInPlan, numberInReality: user, correct: true })
        }
        else {
            if (prevState.numbers[i].correct) {
                rawNumbers.push({ id: prevState.numbers[i].id, numberInPlan: prevState.numbers[i].numberInPlan, numberInReality: prevState.numbers[i].numberInReality, correct: true })
            }
            else {

                rawNumbers.push({ id: prevState.numbers[i].id, numberInPlan: prevState.numbers[i].numberInPlan, numberInReality: user, correct: false })
                wrong = true
            }
        }
    }
    console.log({ numbers: rawNumbers, multiplier: prevState.multiplier, finish: !wrong })
    return { numbers: rawNumbers, multiplier: prevState.multiplier, finish: !wrong }
}

export async function GenerateRandomLinkScaleTable() {
    const values = await GetNumbersScaleTable()
    redirect(`/m/scale/table?value=${JSON.stringify(values)}`)
}
export async function factorizeNumber(prevState: any, formData: FormData) {
    const enteredNumber = formData.get('number') as unknown as number
    console.log(enteredNumber)

    let x = enteredNumber
    let i = 2;
    const primes = [];
    if (x < 0) {
        const result: factorizeType = {
            factorize: [],
            isPrime: undefined,
            fieldData: { number: enteredNumber },
            error: 'Number should be positive'
        } as factorizeType
        return result
    }
    if (x <= 3) {
        const result: factorizeType = {
            factorize: [x],
            isPrime: true,
            fieldData: { number: enteredNumber },
            error: null
        } as factorizeType
        return result
    }
    for (let step = 0; step <= enteredNumber; step++) {
        if (x % i === 0) {
            if (x === i) {
                primes.push(i);
                break
            } else {
                primes.push(i);
                x = x / i
                i = 2
            }
        } else {
            i = i + 1
        }
        console.log(x, i)
    }
    await new Promise(res => setTimeout(res, 3000))
    const result: factorizeType = {
        factorize: primes,
        isPrime: (primes.length != 0),
        fieldData: { number: enteredNumber },
        error: null
    } as factorizeType

    return result
} 