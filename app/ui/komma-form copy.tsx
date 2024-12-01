/*'use client'

import Button from "./button"
import { deKommaCheck } from "../lib/actions"
import { useActionState } from "react"
import Success from "./success"

export default function KommaForm({words, rawText,}:{words:Array<string>, rawText:string}) {
    async function submitFunction(prev:object,formData:FormData) {
        return await deKommaCheck(formData, rawText, words)
    }
    const [state, submit] = useActionState(submitFunction,{correct:[{correct:true, comma:false}], everythingCorrect:false})
    return(
        <form action={submit}>
        <h1 className="text-xl font-bold">Komma</h1>
        <ol className="list-inside list-decimal text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li>Setzen Sie an richtigen Stellen ein Komma. Um schneller Kommas zu setzen, können sie <code className="bg-slate-300 rounded px-1">Tab</code> und <code className="bg-slate-300 rounded px-1">Leerzeichen</code> benutzen</li>
        <li className="peer/test">Sobald Sie fertig sind, können Sie auf Check klicken, um das Ergebnis zu sehen</li>
        <h1 className="peer-hover/test:text-red-200">Test</h1>
        </ol>
        <div className="flex flex-wrap my-2 bg-slate-100 rounded p-2">
        {words.map((word, index) => {
            return (
                <span 
                    key={index} 
                    className="flex justify-center items-center align-middle"
                >
                    {word}
                    <input 
                        type="checkbox" 
                        name={index.toString()} 
                        className={`cursor-pointer w-3 h-4 appearance-none text-black checked:bg-[url('/comma.svg')] bg-cover rounded 
                            ${state.correct[index]?.correct == false ? 'bg-red-500' : ''}
                            ${state.correct[index]?.correct == true && state.correct[index]?.comma == true ? 'bg-green-500/50' : ''}
                            `} 
                        defaultChecked={state.correct[index]?.comma}
                    />
                    {state.correct[index]?.correct == false ? <span className=" absolute w-full h-4 bg-red-500/25 -z-10"></span> : ''}
                </span>               

            )
        })}
        </div>
        <Button text="Check" type="submit"/>
        {state.everythingCorrect ? <Success/>: ''}
    </form>
    )
}*/