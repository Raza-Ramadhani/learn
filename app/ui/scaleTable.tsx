'use client'
import { CheckNumberScaleTable } from "@/app/lib/actions"
import { useActionState } from "react"
import { ScaleTable } from "../lib/types"

export default function ScaleTableForm({ firstState }:{ firstState: ScaleTable}) {
    //const numbers = GetNumbersScaleTable()//[{ id: 0, numberInPlan: 10, numberInReality: 10 }, { id: 1, numberInPlan: 10, numberInReality: undefined }, { id: 2, numberInPlan: 10, numberInReality: 10 }]
    const [state, submit] = useActionState(CheckNumberScaleTable,firstState)
    return (
        <div>
            <form action={submit}>
                <table>
                    <tbody>
                        <tr>
                            <th>Länge Im Plan</th>
                            {state.numbers.map((number) => {
                                return (
                                    <td key={number.id}>{number.numberInPlan}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th>Länge in der Realität</th>
                            <td>

                            {state.numbers.map((number) => {
                                if (typeof number.numberInReality !== "undefined" && number.correct) {
                                    return (

                                            <input id={number.id.toString()} key={number.id} className={`text-5xl flex items-center p-2 rounded ${number.correct ? 'bg-green-600': 'bg-slate-100'}`} name={number.id.toString()}>{number.numberInReality as number}</td>
                                    )
                                } else {
                                    return (
                                            <span  key={number.id} className={`text-5xl flex items-center p-2 rounded ${number.correct ? 'bg-green-600': 'bg-slate-100'}`}>
                                                <input defaultValue={number.numberInReality as number} id={number.id.toString()} type='number' placeholder="Zahl" step={0.000001} name={number.id.toString()} className="w-full bg-transparent appearance-none text-5xl font-meduum font-sans focus:outline-none" />
                                            </span>
                                    )
                                }
                            })}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}