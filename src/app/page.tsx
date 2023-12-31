import foto from "@/img/foto.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-100 lg:w-[700px] flex flex-col lg:grid lg:grid-cols-2 shadow h-5/6 ">
      <Image src={foto} width={350} alt="" className="h-20 object-cover lg:h-full" />
      <div className="flex flex-1 flex-col justify-between px-4 p-12 lg:px-8" >
        <h1 className="text-5xl font-bold text-zinc-900">Hotspot</h1>
        <form className="flex flex-col gap-4">
          <label htmlFor="code">Insira seu código de ativação</label>
          <input type="text" id="code" className="w-full p-2 outline-none" placeholder="*********"/>
          <button type="submit" className="bg-red-700 text-white p-3 hover:bg-red-800">Conectar</button>
        </form>
      </div>  
    </div>
  );
}
