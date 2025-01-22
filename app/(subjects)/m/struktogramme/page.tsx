'use client'
import { useEffect, useState } from "react"
import Image from "next/image"

export default function PythonToStuktogramme() {
    const [pythonCode, setPythonCode] = useState("")
    const [lines, setLines] = useState([])
    useEffect(() => {
        setLines(pythonCode.split('\n'))
    }, [pythonCode])
    return(
        <div>
            <h1>Python to Stuktogramme</h1>
            <p>Diese Funktion ist noch in der Beta Version</p>
            <p>Sie können bis zu drei ineinander gestellte Loops machen, bei zeilen die in einer if sind - müssen sie ein #ifshorten stellen pro if</p>

                <textarea onChange={(e) => setPythonCode(e.target.value)} value={pythonCode} name="pythonCode" id="pythonCode"/>
            <h1>Python verküzter Code</h1>
            <pre>{pythonCode}</pre>
            <h1>Struktogramm</h1>
            <div className="flex flex-col max-w-[500px] p-2">

            {lines.map((line, index) => {
                
                return(
                    <div key={index} className="">
                        {LineBlock(line)}
                    </div>
                )
            })}
            </div>
        </div>
    )
}

function Block({text, className, ifBlock}:{text:string, className:string, ifBlock?:boolean}) {
    //console.log(className)
    return(
        <div className={`${className} border-x border-y p-2 border-black relative`}>{text.replaceAll('#ifshorten','')} {ifBlock? 
        <Image
            alt="Mountains"
            src={'/ifBackground.svg'}
            width={50}
            height={50}
            className="w-full h-full absolute top-0 left-0 object-fill"/> : ''}</div>
    )
}

function LineBlock(line:string) {
    let defineVariable = /[A-Za-z0-9]+\s+=\s+[A-Za-z0-9]+/i;
    //console.log(JSON.stringify(line))
    //let input = /[A-Za-z0-9]+\s+=\s+[A-Za-z0-9]+input\($\)\)/i;
    //let print = /[A-Za-z0-9]+\s+print\([A-Za-z0-9]+\)/i;
    //let leftSpace = getMarginLeft(line)
    let style = ` ${getMarginLeft(line)} ${isIfBefore(line)} `

    if (line == "") {
        return
    }
    if (line.indexOf('print') >= 0) {
        const variale = line.replace('print','')
        return(
            <Block className={style} text={`Ausgabe: ${variale}`}/>
        )
    }
    
    if (line.indexOf('input') >= 0) {
        const variable = line.split("=")
        return(
            <Block className={style} text={`Eingabe: ${variable[0]}`}/>
        )
    }
    if (defineVariable.test(line)) {
        const variable = line.split("=")
        return(
            <Block className={style} text={`${variable[0]} := ${variable[1]}`}/>
        )
    }
    if (line.indexOf('if') >= 0 && !(line.indexOf('#ifshorten') >= 0)) {
        const variale = line.replace('if','')
        return(
            <Block className={`${style} text-center`} text={`${variale}`} ifBlock/>
        )
    }
    return(
        <Block className={style} text={line}/>
        
    )
}
function countLeadingSpaces(str:string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      count++;
    } else {
      break; // Stop counting after the first non-space character
    }
  }
  return count;
}
function getMarginLeft(str:string) {
    const tab = "\t";
    let line = str
    if (isIfBefore(line) == "w-1/2") {
       line = line.replace("    ","")
    }
    if (isIfBefore(line) == "w-1/4") {
        line = line.replace("        ","")
     }
     if (isIfBefore(line) == "w-1/8") {
        line = line.replace("            ","")
     }
    //let leftSpace = 'ml-[30px]'
    //let tabSize = 4
    if (line.startsWith(tab) || line.startsWith("                    ")) {
        //const spaces = countLeadingSpaces(line)
        return `  ml-[150px]`
    }
    if (line.startsWith(tab) || line.startsWith("                ")) {
        //const spaces = countLeadingSpaces(line)
        return `  ml-[120px]`
    }
    if (line.startsWith(tab) || line.startsWith("            ")) {
        //const spaces = countLeadingSpaces(line)
        return `  ml-[90px]`
    }
    if (line.startsWith(tab) || line.startsWith("        ")) {
        //const spaces = countLeadingSpaces(line)
        return ` ml-[60px]`
    }
    if (line.startsWith(tab) || line.startsWith("    ")) {
        //const spaces = countLeadingSpaces(line)
        return `  ml-[30px]`
    }
    return ""
}
function isIfBefore(str:string) {
    const array = str.split(" ")
    //console.log(array)
    let counter = 0
    for (const word of array) {
        console.log(word)
        if (word == '#ifshorten') {
            counter = counter + 1
        }
    }
    if (counter == 3) return "w-1/8"
    if (counter == 2) return "w-1/4"
    if (counter == 1) return "w-1/2"

    return ""
}