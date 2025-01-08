'use client'
import { CheckNumberScaleTable } from "@/app/lib/actions"
import { useActionState } from "react"
import { ScaleTable } from "../lib/types"
import Button from "./button"

export default function ScaleTableForm({ firstState }:{ firstState: ScaleTable}) {
    //const numbers = GetNumbersScaleTable()//[{ id: 0, numberInPlan: 10, numberInReality: 10 }, { id: 1, numberInPlan: 10, numberInReality: undefined }, { id: 2, numberInPlan: 10, numberInReality: 10 }]
    const [state, submit, isPending] = useActionState(CheckNumberScaleTable,firstState)
    return (
        <div>
            <form action={submit} className="">
                <table className="border-collapse text-center">
                    <tbody className="max-w-full">
                        <tr>
                            <th className="border-collapse border p-2">Länge Im Plan</th>
                            {state.numbers.map((number) => {
                                return (
                                    <td key={number.id} className=" border border-collapse">{number.numberInPlan}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th className="border-collapse border p-2">Länge in der Realität</th>
                            

                            {state.numbers.map((number) => {
                                if (typeof number.numberInReality !== "undefined" && number.correct) {
                                    return (
                                        <td  key={number.id} className="border-collapse border">
                                            <span className={`w-16  items-center p-2 ${number.correct ? 'text-green-600': 'bg-slate-100'}`}>

                                            <input className="w-16" readOnly id={number.id.toString()} value={number.numberInReality as number} key={number.id} name={number.id.toString()} />
                                            </span>
                                        </td>
                                    )
                                } else {
                                    return (
                                            <td  key={number.id} className={`border-collapse borderw-16 p-2 rounded ${number.correct ? 'text-green-600 font-bold': 'bg-slate-100'}`}>
                                                <span>

                                                <input className={`w-16 ${number.correct ? 'bg-green-600': 'bg-slate-100'}`} defaultValue={number.numberInReality as number} id={number.id.toString()} type='number' placeholder="Zahl" step={0.000001} name={number.id.toString()} />
                                                </span>
                                            </td>
                                    )
                                }
                            })}
                            
                        </tr>
                    </tbody>
                </table>
                <div className="my-2">

                <span>{firstState.finish ? '' : ''}</span>
                <Button type="submit" text={"Check"}/>
                </div>
            </form>
        </div>
    )
}