import { NumberForm } from "@/app/ui/number-form";

export default function Page() {
    return(
        <div>
            <h1 className="text-xl p-2 rounded bg-blue-500 text-white font-medium mb-2">Math</h1>
            <h1 className="font-bold text-xl">Einheiten umrechenen</h1>
            <ol className="list-inside list-decimal text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li>Schreiben Sie die Antwort hin.</li>
                <li>Klicken sie auf <code className="bg-slate-300 rounded px-1">Enter</code></li>
            </ol>
            <NumberForm/>
        </div>
    )
}