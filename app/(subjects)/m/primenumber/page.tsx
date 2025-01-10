'use client'

//import { factorizeNumber } from "@/app/lib/actions";
import { factorizeType } from "@/app/lib/types";
import Button from "@/app/ui/button";
import { useActionState } from "react";

export default function Page() {
    function factorizeNumber(prevState: unknown, formData: FormData) {
        const enteredNumber = formData.get('number') as unknown as number
        console.log(enteredNumber + "entered number")

        let x = enteredNumber
        let i = 2;
        const primes = [];
        if (x < 0) {
            const result: factorizeType = {
                factorize: [],
                isPrime: undefined,
                fieldData: { number: enteredNumber },
                error: 'Number should be positive'
            } as factorizeType
            return result
        }
        if (x <= 3) {
            const result: factorizeType = {
                factorize: [x],
                isPrime: true,
                fieldData: { number: enteredNumber },
                error: null
            } as factorizeType
            return result
        }
        for (let step = 0; step <= enteredNumber; step++) {
            if (x % i === 0) {
                if (x === i) {
                    primes.push(i);
                    break
                } else {
                    primes.push(i);
                    x = x / i
                    i = 2
                }
            } else {
                i = i + 1
            }
            console.log(x, i)
        }
        // new Promise(res => setTimeout(res, 3000))
        console.log(enteredNumber + "------------- end entered number")
        const result: factorizeType = {
            factorize: primes,
            isPrime: (primes.length == 1),
            fieldData: { number: enteredNumber },
            error: null
        } as factorizeType

        return result
    }

    const [state, action, isPending] = useActionState(factorizeNumber, { factorize: [], isPrime: undefined, fieldData: { number: 0 }, error: null } as factorizeType)
    return (
        <div>
            <h1 className="">Is Prime</h1>
            <ol className=" list-inside list-decimal text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2">natürliche Zahl eingeben</li>
                <li>Auf <code className="p-1 bg-slate-100">Check</code> klicken</li>
            </ol>
            <form action={action} className="flex flex-col mt-2 gap-2">

                <div className="text-5xl flex items-center bg-slate-100 p-2 rounded">
                    {isPending ?
                        <input type='number' readOnly placeholder="Zahl" value={state?.fieldData.number} step={1} className="w-full bg-transparent appearance-none text-5xl font-medium font-sans focus:outline-none" /> 
                        :
                        <input type='number' readOnly={isPending} placeholder="Zahl" defaultValue={state?.fieldData.number} step={1} name="number" id="number" className="w-full bg-transparent appearance-none text-5xl font-medium font-sans focus:outline-none" />
                    }
                </div>
                <div className="flex gap-2">

                    {state?.factorize.map((numberInFactorize, index) => {
                        return (
                            <div className="p-1 bg-blue-100 rounded" key={index}>
                                <span>{numberInFactorize}</span>
                            </div>
                        )
                    })}
                    {state.isPrime ? 
                    <div className="p-1 bg-blue-100 rounded">
                        <span>ist eine Primzahl</span>
                    </div>:
                    null}
                </div>
                <div>
                    {isPending ? 'loading' : ''}
                    <span className="text-red-600">{state.error}</span>
                    <Button text={"Check"} type={'submit'} loading={isPending} />
                </div>
            </form>
        </div>
    )
}
