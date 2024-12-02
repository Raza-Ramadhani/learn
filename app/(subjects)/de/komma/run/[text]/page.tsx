import KommaForm from "@/app/ui/komma-form"

export default async function Page({
    params,
}: {
    params: Promise<{ text: string }>
}) {
    const rawText = decodeURIComponent((await params).text)

    return (
        <div>
            <h1 className="text-xl font-bold">Komma</h1>
            <ol className="list-inside list-decimal text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li>
                    Setzen Sie an richtigen Stellen ein Komma. Um schneller Kommas zu setzen, können Sie <code className="bg-slate-300 dark:bg-slate-700 rounded px-1">Tab</code> und <code className="bg-slate-300 dark:bg-slate-700 rounded px-1">Leerzeichen</code> benutzen
                </li>
                <li>Sobald Sie fertig sind, können Sie auf Check klicken, um das Ergebnis zu sehen</li>
            </ol>
            <KommaForm rawText={rawText} />
        </div>
    )
}