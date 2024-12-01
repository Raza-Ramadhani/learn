'use client'
import Button from "@/app/ui/button"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()

    function submit(formData:FormData) {
        const text = formData.get('text')
        router.push(`/de/komma/run/${encodeURIComponent(text as string)}`)
    }
    return(
        <div>
            <form action={submit}>
                <h1 className="text-xl font-bold h">Übungen Kommasetzung</h1>
                <ol className="list-inside list-decimal text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">Text mit Komma einfügen</li>
                    <li>Auf den Button drücken</li>
                </ol>
                <textarea name="text" id="text" placeholder="Text..." className="w-full min-h-64 rounded focus:outline-none bg-slate-100 p-1 my-1"></textarea>
                <Button type="submit" text="Starten"/>
            </form>
        </div>
    )
}