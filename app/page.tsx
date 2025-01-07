import Link from "next/link";
import TableResetButton from "./ui/newNumberButton";

export default function Home() {
  return (
    <div>
      <h1 className=" text-5xl font-bold font-sans">learn.app</h1>
      <p className="mt-4 text-left">Learn Your Way. Anytime, Anywhere. Explore interactive exercices. Start your learning journey today.</p>
          
          
          <h1 className="font-bold text-xl">German</h1>
          <div className="ml-4 w- flex flex-col">
              <Link href="/de/komma" className=" rounded p-2 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition cursor-pointer">
                <h1 className="text-xl font-bold">Komma Übungen</h1>
                <p className="text-sm">Kommasetzung üben</p>
              </Link>
          </div>
          <h1 className="font-bold text-xl">Math</h1>
          <div className="ml-4 w- flex flex-col">
              <Link href="/m/einheiten/a" className=" rounded p-2 transition cursor-pointer dark:hover:bg-blue-900 hover:bg-blue-100">
                <h1 className="text-xl font-bold">Einheiten Umrechnen</h1>
                <p className="text-sm">Übungen für die 5.Klasse</p>
              </Link>
              <Link href="/m/dezimal" className=" rounded p-2 transition cursor-pointer dark:hover:bg-blue-900 hover:bg-blue-100">
                <h1 className="text-xl font-bold">Multiplikationen mit Dezimalzahlen</h1>
                <p className="text-sm">Übungen für die 5.Klasse</p>
              </Link>
              <Link href={'/'} className="rounded p-2 cursor-not-allowed text-gray-500 ">
                <h1 className=" font-semibold text-lg">Nothing</h1>
                <span className="text-sm">Test Lorem Ipusm</span>
              </Link>
              <TableResetButton/>
          </div>
  
    </div>
  );
}
