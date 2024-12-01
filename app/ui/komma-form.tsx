'use client'

import Button from "./button"
import { deKommaCheck } from "../lib/actions"
import { useActionState } from "react"
import Success from "./success"

export default function KommaForm({rawText} : {rawText:string}) {
    const text = rawText.replaceAll(', ', ' ')
    const words = text.split(' ')
    const rawSenteces = text.split('. ')
    //const rawSenteces = text.split('.')
    //console.log(rawSenteces)
    const sentences:Array<{wordsBeforeSentence:number,wordsInSentence:Array<string>}> = []
    let sentencesLength = 0
    for (let i = 0; i < rawSenteces.length; i++) {
        console.log(rawSenteces[i])
        const wordsInSentence = rawSenteces[i].split(' ')
        //////console.log(wordsInSentence)
        sentences.push({wordsBeforeSentence: sentencesLength,wordsInSentence:wordsInSentence})
        sentencesLength = sentencesLength + wordsInSentence.length
    }
//    const sentences = text.split('.')
////console.log(sentences)
    
    async function submitFunction(prev:object,formData:FormData) {
        return await deKommaCheck(formData, rawText, words)
    }
    const [state, submit] = useActionState(submitFunction,{correct:[{correct:true, comma:false}], everythingCorrect:false})
    return(
        <form action={submit}>
        <div className="my-2 bg-slate-100 rounded p-2">
        {sentences.map((sentence, sentenceIndex) => {
            ////console.log(state.correct.slice(sentence.wordsBeforeSentence,10))
            return(
                <span className={`
                ${state.correct.slice(
                    sentence.wordsBeforeSentence, 
                    (sentence.wordsBeforeSentence + sentences[sentenceIndex].wordsInSentence.length))
                    .some((x) => x.correct==false) ? 'bg-red-300' : ''}`} key={sentenceIndex}>
                    {sentence.wordsInSentence.map((word:string, index) => {
                        return(
                            <span 
                            key={index} 
                            className=""
                        >
                            {word}{sentence.wordsInSentence.length == index+1 ? '.':'' }{/*(sentence.wordsBeforeSentence + index+1).toString()*/}
                            <input 
                                type="checkbox" 
                                name={(sentence.wordsBeforeSentence + index).toString()} 
                                className={`cursor-pointer w-3 h-4 appearance-none text-black checked:bg-[url('/comma.svg')] bg-cover rounded 
                                    ${state.correct[sentence.wordsBeforeSentence + index]?.correct == false ? '' : ''}
                                    ${state.correct[(sentence.wordsBeforeSentence + index)]?.correct == true && state.correct[index]?.comma == true ? 'bg-green-500/50' : ''}
                                    `} 
                                defaultChecked={state.correct[(sentence.wordsBeforeSentence + index)]?.comma}
                            />
                        </span>       
                        )
                    })}
                </span>
            )
        })}
        </div>
        <Button text="Check" type="submit"/>
        {state.everythingCorrect ? <Success/>: ''}
    </form>
    )
}