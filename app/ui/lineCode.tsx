'use client'
export default async function CodeLine({children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <code className="bg-slate-200 px-2 rounded" draggable>
            {children}
        </code>
    )
}