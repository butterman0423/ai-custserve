import { auth } from "@/auth";
import { redirect } from "next/navigation";

import SignInButton from "@/components/SignInButton";

export default async function Home() {
  const session = await auth();
  if(session) {
    redirect('/support');
  }
  
  return (
    <>
      <main className="container mx-auto text-text">
        <div className="xl:mt-40 mt-20 sm:mt-10">
          <h1 className="xl:text-8xl md:text-5xl sm:text-3xl text-center mb-5 p-10 border-8 rounded-xl">
            Headstarter Chatbot
          </h1>
          <div className="h-12 w-full relative">
            <SignInButton 
              className="absolute inset-x-1/3 bg-accent h-full rounded-lg drop-shadow-xl hover:shadow-xl shadow-gray-900" />
          </div>
        </div>
      </main>
      <footer className="absolute w-screen h-16 bottom-0 bg-secondary text-gray-800 shadow-2xl shadow-black px-8">
        <div className="inline-block h-full">
          <span className="h-full flex flex-col justify-center">
            Developed by: Esat Adiloglu, Nathaniel Escaro, Ryan Eshan, Saikarthik Mummadisingu
          </span>
        </div>
        <div className="inline-block h-full float-end">
          <a className="h-full flex flex-col justify-center p-3 hover:bg-primary" href="https://github.com/butterman0423/ai-custserve">Source Code</a>
        </div>  
      </footer>
    </>
  );
}
