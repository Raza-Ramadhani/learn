import Button from "./button";
import { useState } from "react";

export default function Success({text}: {text:string}) {
    const [open, setOpen] = useState(true)
    return(
        <div>
        {open ?         <div className="fixed w-full h-full top-0 left-0 backdrop-blur bg-white/50 flex justify-center items-center">
            <button className=" absolute top-4 right-4" onClick={() => setOpen(false)}>Close</button>
            <div className="flex-col flex gap-2 max-w-full items-center">
                <h1 className="text-xl font-xl font-bold">{text}<span className="text-6xl text-center">&#128077;</span></h1>
                <div className="flex flex-row gap-2">
                    <Button text="Nächste Aufgabe" type='submit'/>
                </div>
            </div>
        </div> : ''}

        </div>
    )
}