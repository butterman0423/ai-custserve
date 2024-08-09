import { auth } from "@/auth";
import { redirect } from "next/navigation";

import SignInButton from "@/components/SignInButton";

export default async function Home() {
  const session = await auth();
  if(session) {
    redirect('/support');
  }
  
  return (
    <main className="w-screen h-screen">
      <h1 className="xl:text-7xl md:text-5xl sm:text-3xl">AI Customer Support</h1>
      <SignInButton/>
    </main>
  );
}
