'use client'

export default function Button({text, type}:{text:string, type:"button" | "submit" | "reset" | undefined}) {
    return(
        <button 
        type={type} 
        className="rounded-full font-medium border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] px-4 text-sm py-2"
        >
        {text}
        </button>
    )
}