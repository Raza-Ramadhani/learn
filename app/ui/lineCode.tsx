'use client'
export default function CodeLine({children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <code className="bg-slate-200 px-2 rounded" draggable>
            {children}
        </code>
    )
}