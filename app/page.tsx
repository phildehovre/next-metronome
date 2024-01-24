import Metronome from "@/components/metronome/metronome";
import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  const { userId } = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Metronome />
    </main>
  );
}
