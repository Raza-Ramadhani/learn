'use client'

import { mNumberCheck } from "@/app/lib/actions"
import Button from "@/app/ui/button"
import Success from "@/app/ui/successMath"
import { useActionState, useEffect, useState } from "react"

export function NumberForm() {
    const lange = [
        {name: 'Gewicht', units: [
            {name: 'Miligramm', symbol:'mg', decimal:0.001},
            {name: 'Gramm', symbol:'g', decimal:1},
            {name: 'Kilogramm', symbol:'kg', decimal:1000},
            {name: 'Tonnen', symbol:'t', decimal:1000000},
            {name: 'Kilogramm', symbol:'kg', decimal:1000},
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
            <h1 className="font-bold text-xl">Einheiten umrechenen</h1>
            <form action={submit} className="flex flex-col w-full gap-2">
            <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>

                <h1>{state.randomNumber} {JSON.stringify(lange[state.randomEinheit].units[state.startUnitIndex]?.symbol)} in {JSON.stringify(lange[state.randomEinheit].units[state.randomUnitIndex]?.name)}</h1>
                <input type='number' placeholder="Zahl"  step={0.000001} name="value" className="w-full appearance-none text-5xl font-meduum font-sans focus:outline-none"/>
                {state.correct == false ? <h1 className="text-red-500">Etwas ist falsch</h1>:''}
                <Button type="submit" text="Check"/>
                {state.correct? <Success text={`Ja das ist richtig!`}/>:''}
            </form>
        </div>
    )
}