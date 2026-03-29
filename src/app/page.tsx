import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-[linear-gradient(to_bottom,#A06DC2_0%,#8149A7_100%)] font-sans dark:bg-black">
        <div className="absolute top-[132px] left-[520px] w-[400px] h-[535.78px] rounded-[24px] bg-white shadow-lg">
           
           {/* Div Superior (Cabeçalho/Topo) */}
          <div className="w-full h-[140px] bg-gray-200 rounded-t-[24px] shrink-0">
            {/* Conteúdo da parte da capa */}
          </div>


          {/* Div Inferior (Conteúdo principal) */}
          <div className="flex-1 p-6 bg-white">
            {/* Conteúdo do cartão  */}
          </div>

        </div>
    </div>
  );
}
