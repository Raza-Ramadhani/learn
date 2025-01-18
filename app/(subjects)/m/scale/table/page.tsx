import { ScaleTable } from "@/app/lib/types";
import TableResetButton from "@/app/ui/newNumberButton";
import ScaleTableForm from "@/app/ui/scaleTable"

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [value: string]: string | string[] | undefined }>
}) {
    const { value } = await searchParams
    const values = await JSON.parse(value as string)
    console.log(values)
    return (
        <div className="w-full max-h-svh overflow-y-hidden h-svh -m-4">
            <h1 className="text-xl font-bold">Verkleinern und vergrößern</h1>
               
            <div className="h-full w-full flex flex-col items-center justify-center">
                <ScaleTableForm firstState={values as ScaleTable} />
                <TableResetButton/>
            </div>
        </div>
    )
}