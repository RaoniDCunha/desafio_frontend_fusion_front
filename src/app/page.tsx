import { ProfileCard } from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[linear-gradient(to_bottom,#A06DC2_0%,#8149A7_100%)] font-sans dark:bg-black p-4">
      <ProfileCard /> 
    </div>
  );
}
