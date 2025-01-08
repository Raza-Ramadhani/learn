'use client'

import { GenerateRandomLinkScaleTable } from "../lib/actions"

export default function TableResetButton() {
    return(
        <form action={GenerateRandomLinkScaleTable}>
        <button type="submit" className="bg-gray-300 p-2 rounded">Reset</button>
        </form>
            
    )
}