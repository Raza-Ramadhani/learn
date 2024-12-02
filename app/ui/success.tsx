'use client'
import Link from "next/link";
import Button from "./button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Reload } from "../lib/actions";

export default function Success() {
    const pathname = usePathname()
    const router = useRouter()
    /*function reload() {
        router.push(pathname)
        
    }*/
    const [open, setOpen] = useState(true)
    return(
        <div>
        {open ?         <div className="fixed w-full h-full top-0 left-0 backdrop-blur bg-white/50 dark:bg-slate-900/80 flex justify-center items-center">
            <button className=" absolute top-4 right-4" onClick={() => setOpen(false)}>Close</button>
            <div className="flex-col flex gap-2 max-w-full items-center">
                <h1 className="text-xl font-xl font-bold">Super! {'\n'}Sie haben das toll gemacht!<span className="text-6xl text-center">&#128077;</span></h1>
                <div className="flex flex-row gap-2">
                    <form action={() => Reload(pathname)}>
                    <Button text="Erneut versuchen" type='submit'/>
                    </form>
                    <Link href={'/de/komma'}><Button text="Anderen Text versuchen" type='button'/></Link>
                </div>
            </div>
        </div> : ''}

        </div>
    )
}