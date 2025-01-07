import { ScaleTable } from "@/app/lib/types";
import TableResetButton from "@/app/ui/newNumberButton";
import ScaleTableForm from "@/app/ui/scaleTable"

export default async function Page({
    searchParams
}: {
    searchParams: Promise<{[value: string]: string | string[] | undefined }>
}) {
    const {value} = await searchParams
    const values = await JSON.parse(value as string)
    
    return (
        <div>
                <TableResetButton/>
            <ScaleTableForm firstState={values as ScaleTable} />
        </div>
    )
}