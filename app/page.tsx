import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className=" text-5xl font-bold font-sans">learn.app</h1>
      <p className="mt-4 text-left">Learn Your Way. Anytime, Anywhere. Explore interactive exercices. Start your learning journey today.</p>
          
          
          <h1 className="font-bold text-xl">German</h1>
          <div className="ml-4 w- flex flex-col">
              <Link href="/de/komma" className=" rounded p-2 hover:bg-slate-100 transition cursor-pointer">
                <h1 className="text-xl font-bold">Komma Übungen</h1>
                <p className="text-sm">Komma setzen Lorem Ipsum dolor sit amet</p>
              </Link>
          </div>
          <h1 className="font-bold text-xl">Math</h1>
          <div className="ml-4 w- flex flex-col">
              <Link href="/de/komma" className=" rounded p-2 text-gray-500 transition cursor-not-allowed">
                <h1 className="text-xl font-bold">Einheiten Umrechnen</h1>
                <p className="text-sm">Coming Soon! Übung für Grundstufe 5.Klasse</p>
              </Link>
              <Link href={'/'} className="rounded p-2 cursor-not-allowed text-gray-500 ">
                <h1 className=" font-semibold text-lg">Nothing</h1>
                <span className="text-sm">Test Lorem Ipusm</span>
              </Link>
          </div>
  
    </div>
  );
}
