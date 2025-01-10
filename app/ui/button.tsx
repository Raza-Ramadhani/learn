'use client'

export default function Button({text, type, loading}:{text:string, type:"button" | "submit" | "reset" | undefined, loading?:boolean}) {
    return(
        <button 
        type={type} 
        className="rounded-full transition-all font-medium border border-solid border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] px-4 text-sm py-2"
        >
        {loading ? <span className="flex flex-row gap-2"><h1 className="animate-spin">0</h1> Loading...</span>:text}
        </button>
    )
}
/*
export default function Button({
    //kind = 'default',
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    //kind?: 'default' | 'error';
  }) {
    return (
      <button
      className="rounded-full font-medium border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] px-4 text-sm py-2"
      {...props}
      />
    );
  }*/