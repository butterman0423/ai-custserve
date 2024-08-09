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
      <footer className="absolute w-screen h-20 bottom-0 bg-gray-200 text-gray-800 shadow-inner px-8 flex justify-between items-center">
  <div className="flex items-center">
    <span className="text-sm md:text-base font-semibold">
      Developed by: Esat Adiloglu, Nathaniel Escaro, Saikarthik Mummadisingu, Ryan Eshan
    </span>
  </div>
  <div className="flex items-center">
    <a className="flex items-center p-3 hover:bg-gray-300 rounded-md transition-colors" href="https://github.com/butterman0423/ai-custserve">
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.478 2 2 6.478 2 12c0 4.418 2.865 8.167 6.84 9.489.5.092.682-.217.682-.483 0-.238-.008-.87-.013-1.707-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.909-.621.069-.609.069-.609 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.911.832.092-.646.349-1.088.635-1.339-2.22-.252-4.555-1.11-4.555-4.943 0-1.092.39-1.985 1.029-2.684-.103-.253-.447-1.27.098-2.648 0 0 .841-.269 2.75 1.026a9.558 9.558 0 012.5-.337c.849.004 1.706.115 2.5.337 1.908-1.295 2.749-1.026 2.749-1.026.545 1.378.202 2.395.1 2.648.641.699 1.029 1.592 1.029 2.684 0 3.842-2.337 4.688-4.564 4.933.359.308.679.918.679 1.85 0 1.335-.012 2.41-.012 2.737 0 .269.181.58.688.482C19.135 20.167 22 16.418 22 12c0-5.522-4.478-10-10-10z"></path>
      </svg> {/* GitHub Logo */}
      <span className="text-sm md:text-base font-medium">Source Code</span>
    </a>
  </div>
</footer>
    </>
  );
}
