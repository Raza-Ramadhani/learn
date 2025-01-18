import Link from "next/link";
import TableResetButton from "./ui/newNumberButton";
import { GenerateRandomLinkScaleTable } from "./lib/actions";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <Image width={60} height={60} src={'/logo.svg'} alt="Logo" className="border rounded-lg bg-slate-50 border-slate-300"/>
        <h1 className=" text-5xl font-bold font-sans">earn.app</h1>
      </div>
      <p className="mt-4 text-left">Die Online-Lernplattform</p>


      <h1 className="font-bold text-xl">German</h1>
      <div className="ml-4 w- flex flex-col">
        <Link href="/de/komma" className=" rounded p-2 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition cursor-pointer">
          <h1 className="text-xl font-bold">Kommasetzung</h1>
          <p className="text-sm">Kommasetzung üben</p>
        </Link>
      </div>
      <h1 className="font-bold text-xl">Math</h1>
      <div className="ml-4 w- flex flex-col">
        <Link href="/m/unit/a" className=" rounded p-2 transition cursor-pointer dark:hover:bg-blue-900 hover:bg-blue-100">
          <h1 className="text-xl font-bold">Einheiten umrechnen</h1>
          <p className="text-sm">Übungen für die 5.Klasse</p>
        </Link>
        <Link href={'/'} onClick={GenerateRandomLinkScaleTable} className=" rounded p-2 transition cursor-pointer dark:hover:bg-blue-900 hover:bg-blue-100">
          <h1 className="text-xl font-bold">Verkleinern und vergrössern</h1>
          <p className="text-sm">Übungen für die 5.Klasse</p>
        </Link>
        <Link href="/m/dezimal" className="rounded p-2 cursor-not-allowed text-gray-500 hover:bg-red-100">
          <h1 className="text-xl font-bold">Multiplikation mit Dezimalzahlen</h1>
          <p className="text-sm">Zurzeit nicht verfügbar</p>
        </Link>
        <Link href={'/m/primenumber'} className="rounded p-2 transition cursor-pointer dark:hover:bg-blue-900 hover:bg-blue-100 ">
          <h1 className=" font-semibold text-lg">Primzahl</h1>
          <span className="text-sm">Funktion Primzahl-Check</span>
        </Link>
      </div>
    </div>
  );
}
