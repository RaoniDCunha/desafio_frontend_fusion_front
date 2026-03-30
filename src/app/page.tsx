import { ProfileCard } from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[linear-gradient(to_bottom,#A06DC2_0%,#8149A7_100%)] font-sans dark:bg-black p-4">
      <ProfileCard campoSeguidoresCard={980} campoSeguindoCard={180} campoProjetosCard={42} campoNomeCard={"Ana Silva"} campoCargoCard={"Desenvolvedora Full Stack"} campoDescricao1="Apaixonada por criar experiências digitais incríveis. "  campoDescricao2="Especialista em React e Node.js." caminhoImagem="/images/user.png" /> 
    </div>
  );
}
