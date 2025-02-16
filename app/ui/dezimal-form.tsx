import { useActionState} from "react"
import Button from "./button"
import Success from "./successMath"

export default function DezimalForm() {
    function mDecimalCheck(prevState:{randomNumber: number, randomMultiplier: number, correct:undefined|boolean},formData:FormData) {
        const userNumber = formData.get('value')
        if (userNumber == null) {
            return prevState
        }
        if(prevState.correct == true) {
            return reset(undefined)
        }
        if (userNumber as unknown as number == prevState.randomNumber) {
            const newState = prevState
            prevState.correct = true
            return newState
        }
        return prevState
    }
    function reset(correct?:boolean) {
        return {
            randomNumber: Math.floor(Math.random() * 999),
            randomMultiplier: 10*10**Math.floor(Math.random() * 2), 
            correct: correct,
        }
        }
     const [state, submit] = useActionState(mDecimalCheck,
            {
                randomNumber: Math.floor(Math.random() *2) as number,
                randomMultiplier: Math.floor(Math.random() * 99) as number, 
                correct: undefined as undefined|boolean,
            })

    return(
        <form action={submit}>
                <h1 className="font-medium"><code className="bg-slate-300 rounded px-1">{JSON.stringify(state.randomNumber/state.randomMultiplier)} x {JSON.stringify(state.randomMultiplier as number)}</code></h1>
                <div className="text-5xl flex items-center bg-slate-100 p-2 rounded">
                        <input type='number' placeholder="Zahl"  step={0.000001} name="value" className="w-full bg-transparent appearance-none text-5xl font-meduum font-sans focus:outline-none"/><h1></h1>
                </div>
                {state.correct == false ? <h1 className="text-red-500">Etwas ist falsch</h1>:''}
                <Button type="submit" text="Check"/>
                {state.correct? <Success text={`Ja das ist richtig!`}/>:''}
        </form>
    )
}