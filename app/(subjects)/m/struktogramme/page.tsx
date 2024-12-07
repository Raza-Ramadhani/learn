export default function Page() {
    const sequence:Array<JSX.Element> = [
        ProcessBlock('test'),
        InputBlock(),
        ProcessBlock('h'),
        Conditional(),
      ];    return(
        <div className="flex flex-row h-svh w-full absolute inset-0 p-4">
            <div className="max-w-80 bg-blue-100 h-full rounded p-4 w-[20%]">
                <div className="p-2 bg-orange-200 rounded w-full">
                    <h1 className="text-xl font-bold">Under Construction</h1>
                    <p>TBA</p>
                </div>
                <h1 className="text-2xl font-bold">Struktogramme</h1>
            
            </div>
            <div className="p-4 flex items-center w-full justify-center">
                <div className="min-w-24">
                    {sequence.map((Block: JSX.Element) => Block)}
                    {sequence.map((Block: JSX.Element) => {
                        return(
                            <div key={Math.random()}>
                                {Block}
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="rounded resize-x h-full min-w-36 bg-slate-900 overflow-auto border border-blue-300 direction-[rtl]">
                <h2>Code <select><option>Python</option></select></h2>
                <textarea placeholder="ohoupojoijpopoijojo" className="fire-base"/>
            </div>
        </div>
    )
}

function OuterBlock({children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div className="" draggable>
            {children}
        </div>
    )
}

function ProcessBlock(variable:string) {
    return(
        <OuterBlock>
            <span>
                {variable}
                x:= x +
            </span>
        </OuterBlock>
    )
}

function InputBlock() {
    return(
        <OuterBlock>
            <span>

            </span>
        </OuterBlock>
    )
}


function Conditional() {
    return(
        <OuterBlock>
            <span>
Conditional
            </span>
        </OuterBlock>
    )
}