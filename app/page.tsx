import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="text-color-blue">Mis Ancestros</h1>
       <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      <Image
        src="/tower.png"
        width={400}
        height={400}
        className=""
        alt="Tower"
        />
    </div>
   </main>
  );
}
