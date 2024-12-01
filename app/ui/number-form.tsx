'use client'

import Button from "@/app/ui/button"
import Success from "@/app/ui/successMath"
import { useActionState, useEffect, useState } from "react"

export function NumberForm() {
    const lange:Array<{name:string,units:Array<{name:string,symbol:string,decimal:number}>}> = [
        {name: 'Gewicht', units: [
            {name: 'Miligramm', symbol:'mg', decimal:0.001},
            {name: 'Gramm', symbol:'g', decimal:1},
            {name: 'Kilogramm', symbol:'kg', decimal:1000},
            {name: 'Kilogramm', symbol:'kg', decimal:1000},
            {name: 'Tonnen', symbol:'t', decimal:1000000},
        ]},
        {name: 'Länge', units: [
            {name: 'Kilometer', symbol:'km', decimal:1000},
            {name: 'Meter', symbol:'m', decimal:1},
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
    function mNumberCheck(prevState: {randomEinheit:number,randomNumber:number,startUnitIndex:number,randomUnitIndex:number, correct:undefined|boolean},formData:FormData) {
        const userNumber = formData.get('value') as unknown as number
        const multiple = lange[prevState.randomEinheit].units[prevState.randomUnitIndex].decimal / lange[prevState.randomEinheit].units[prevState.startUnitIndex].decimal
        console.log(prevState)
        if(prevState.correct == true) {
            const startUnitIndex = Math.floor(Math.random() * 4)
            const indexUpOrDown = Math.floor(Math.random() * 1) + 1
            const makeDecimal = Math.floor(Math.random() * 2) == 0 ? 1 : 0.1
            
            return {
                randomEinheit: Math.floor(Math.random() *2),
                randomNumber: (Math.floor(Math.random() * 999)*makeDecimal).toPrecision(3) as unknown as number, 
                startUnitIndex: startUnitIndex, 
                randomUnitIndex: startUnitIndex + indexUpOrDown < 5 ? startUnitIndex+ indexUpOrDown: startUnitIndex - indexUpOrDown,
                correct: undefined,
            }
        }
        console.log((userNumber * lange[prevState.randomEinheit].units[prevState.randomUnitIndex].decimal))
        console.log((lange[prevState.randomEinheit].units[prevState.startUnitIndex].decimal * prevState.randomNumber))
        if ((userNumber * lange[prevState.randomEinheit].units[prevState.randomUnitIndex].decimal).toPrecision(5) as unknown as number == (lange[prevState.randomEinheit].units[prevState.startUnitIndex].decimal * prevState.randomNumber).toPrecision(5)as unknown as number) {
            return{
                randomEinheit: prevState.randomEinheit,
                randomNumber: prevState.randomNumber, 
                startUnitIndex: prevState.startUnitIndex, 
                randomUnitIndex: prevState.randomUnitIndex,
                correct: true,
            }
        }
        else {
            return{
                randomEinheit: prevState.randomEinheit,
                randomNumber: prevState.randomNumber, 
                startUnitIndex: prevState.startUnitIndex, 
                randomUnitIndex: prevState.randomUnitIndex,
                correct: false,
            }
        }
    /*        return {
            randomNumber: Math.floor(Math.random() * 4), 
            startUnitIndex: Math.floor(Math.random() * 4), 
            randomUnitIndex: Math.floor(Math.random() * 4),
        }*/
    }
    const [state, submit] = useActionState(mNumberCheck,
        {
            randomEinheit: Math.floor(Math.random() *2),
            randomNumber: Math.floor(Math.random() * 99), 
            startUnitIndex: Math.floor(Math.random() * 4), 
            randomUnitIndex: Math.floor(Math.random() * 3),
            correct: undefined,
        })
        const [isClient, setIsClient] = useState(false)

        useEffect(() => {
            setIsClient(true)
        }, [])
    
    return(
        <div>
            <form action={submit} className="flex flex-col w-full gap-2 mt-4">
            <h1 className="hidden">{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>

                <h1 className="font-medium"><code className="bg-slate-300 rounded px-1">{state.randomNumber}{(lange[state.randomEinheit].units[state.startUnitIndex]?.symbol)}</code> in {(lange[state.randomEinheit].units[state.randomUnitIndex]?.name)}</h1>
                <div className="text-5xl flex items-center bg-slate-100 p-2 rounded">
                    <input type='number' placeholder="Zahl"  step={0.000001} name="value" className="w-full bg-transparent appearance-none text-5xl font-meduum font-sans focus:outline-none"/><h1>{lange[state.randomEinheit].units[state.randomUnitIndex].symbol}</h1>
                </div>
                {state.correct == false ? <h1 className="text-red-500">Etwas ist falsch</h1>:''}
                <Button type="submit" text="Check"/>
                {state.correct? <Success text={`Ja das ist richtig!`}/>:''}
            </form>
        </div>
    )
}