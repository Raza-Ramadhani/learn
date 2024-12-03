'use client'
//This is in BETA VERSION. CODE CLEANING IN PROGRESS

import Button from "./button"
import { deKommaCheck } from "../lib/actions"
import { useActionState } from "react"
import Success from "./success"

export default function KommaForm({rawText} : {rawText:string}) {
    const text = rawText.replaceAll(', ', ' ')
    const words = text.split(/(\S+\n?)\s*/).filter(Boolean);
    const rawSenteces = text.split(/(?<=\.[\s]*)(?!\n)(?=\S)/)
    //(/(?<=\.[\s]*)(?!\n)(?!\.)/)//(/(?<=[.!?])\s*(?!.)/)//(/(?<=\.)\s*(?!\n)/)//(/(?<=\.)\s*/)
    console.log(JSON.stringify(words[1]))
    console.log(rawSenteces);
    //const rawSenteces = text.split('.')
    //console.log(rawSenteces)
    const sentences:Array<{wordsBeforeSentence:number,wordsInSentence:Array<string>}> = []
    let sentencesLength = 0
    for (let i = 0; i < rawSenteces.length; i++) {
        console.log(JSON.stringify(rawSenteces[i] + '------'))
        const wordsInSentence = rawSenteces[i].split(/(\S+\n?)\s*/).filter(Boolean);
        //////console.log(wordsInSentence)
        for (let x= 0;x<wordsInSentence.length; x++) {
            console.log(JSON.stringify(wordsInSentence[x]))
        }
    console.log(JSON.stringify(wordsInSentence[9]))

        sentences.push({wordsBeforeSentence: sentencesLength,wordsInSentence:wordsInSentence})
        sentencesLength = sentencesLength + wordsInSentence.length
        console.log(sentencesLength)
    }
//    const sentences = text.split('.')
////console.log(sentences)
    
    async function submitFunction(prev:object,formData:FormData) {
        return await deKommaCheck(formData, rawText, words)
    }
    const [state, submit] = useActionState(submitFunction,{correct:[{correct:true, comma:false}], everythingCorrect:false})
    return(
        <div>
        <form action={submit}>
        <div className="my-2 bg-slate-100 dark:bg-slate-800 rounded p-2">
        {sentences.map((sentence, sentenceIndex) => {
            ////console.log(state.correct.slice(sentence.wordsBeforeSentence,10))
            return(
                <span className={`
                ${state.correct.slice(
                    sentence.wordsBeforeSentence, 
                    (sentence.wordsBeforeSentence + sentences[sentenceIndex].wordsInSentence.length))
                    .some((x) => x.correct==false) ? 'bg-red-300 dark:bg-red-700' : ''}`} key={sentenceIndex}>
                    {sentence.wordsInSentence.map((word:string, index) => {
                        return(
                            <span 
                            key={index} 
                        >
                            <span className="inline-block">
                            {word}
                            {/*(sentence.wordsBeforeSentence + index+1).toString()*/}
                            <input 
                                type="checkbox" 
                                name={(sentence.wordsBeforeSentence + index).toString()} 
                                className={`cursor-pointer w-3 h-4 appearance-none text-black checked:bg-[url('/comma.svg')] bg-cover rounded m-0
                                    ${state.correct[sentence.wordsBeforeSentence + index]?.correct == true ? '' : ''}
                                    ${state.correct[(sentence.wordsBeforeSentence + index)]?.correct == true && state.correct[(sentence.wordsBeforeSentence + index )]?.comma == true ? 'bg-green-500/50' : 'dark:invert'}
                                    `} 
                                defaultChecked={state.correct[(sentence.wordsBeforeSentence + index)]?.comma}
                            />
                            </span>
                        {/\r|\n/.exec(word) ? <br></br>: ''}

                        </span>       
                        )
                    })}
                </span>
            )
        })}
        </div>
        <Button text="Check" type="submit"/>
    </form>
        {state.everythingCorrect ? <Success/>: ''}
    </div>
    )
}