import Button from "@/app/ui/button"
import KommaForm from "@/app/ui/komma-form"
import { useRouter } from "next/navigation"

export default async function Page({
    params,
}: {
    params: Promise<{ text: string}>
}) {
    const rawText = decodeURIComponent((await params).text)
    const text = rawText.replaceAll(', ',' ')
    const words = text.split(' ')
    /*async function submit(formData:FormData) {
        'use server'
        console.log(formData.values)
        const correctWords = rawText.split(' ')
        var commas = []
        for (let i = 0; i < words.length; i++) {
            const checkingWord = `${words[i]}${formData.get(i.toString()) == 'on' ? ',' : ''}`
            //console.log(formData.get(i.toString()))
            console.log(checkingWord + " - " + correctWords[i])
            if (correctWords[i] == checkingWord) {
                console.log('correct')
            } else {
                commas.push(`${checkingWord} is wrong`)
            }
        }

        console.log(commas)
    }*/
    return(
<KommaForm words={words} rawText={rawText}/>
    )
}