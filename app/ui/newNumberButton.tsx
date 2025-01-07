'use client'

import { GenerateRandomLinkScaleTable } from "../lib/actions"

export default function TableResetButton() {
    return(
        <form action={GenerateRandomLinkScaleTable}>
        <button type="submit">Generate Random Number</button>
        </form>
            
    )
}