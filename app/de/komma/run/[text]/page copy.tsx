/*import Button from "@/app/ui/button"
import { useRouter } from "next/navigation"

export default async function Page({
    params,
}: {
    params: Promise<{ text: string}>
}) {
    const rawText = decodeURIComponent((await params).text)
    const text = rawText.replaceAll(', ',' ')
    const words = text.split(' ')
    async function submit(formData:FormData) {
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
    }
    return(
        <form action={submit}>
            <h1 className="text-xl font-bold">Komma</h1>
            <ol className="list-inside list-decimal text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li>Setzen Sie an richtigen Stellen ein Komma. Um schneller Kommas zu setzen, können sie <code className="bg-slate-300 rounded px-1">Tab</code> benutzen</li>
                <li>Sobald Sie fertig sind, können Sie auf Check klicken um das Ergebnis zu sehen</li>
            </ol>
            <div className="flex flex-wrap my-2 bg-slate-100 rounded p-2">
            {words.map((word, index) => {
                return(
                    <span key={index} className="flex justify-center items-center align-middle">{word}<input type="checkbox" name={index.toString()} className="cursor-pointer w-3 h-4 appearance-none text-black checked:bg-[url('/comma.svg')] bg-cover rounded"/></span>               

                )
            })}
            </div>
            <Button text="Check" type="submit"/>
        </form>
    )
}*/