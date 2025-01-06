import { GetNumbersScaleTable } from "@/app/lib/actions"
import ScaleTableForm from "@/app/ui/scaleTable"

export default async function Page() {
    return (
        <div>
            <ScaleTableForm firstState={await GetNumbersScaleTable()}/>
        </div>
    )
}