import SignOutButton from "@/components/SignOutButton";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const session = await auth();
    if(!session) {
        redirect('/');
    }
    
    return (
        <>
            <nav className="fixed bg-textfield w-screen h-12 px-10 z-10 shadow-lg shadow-black">
                <SignOutButton className="h-full w-auto p-2 hover:bg-primary"/>
                <div className="float-end h-full flex flex-col justify-center">
                    <span className="text-center"
                    style={{color:"white"}}>
                        { session?.user?.name }
                    </span>
                </div>
            </nav>
            <SessionProvider session={session}>
                <main>{ children }</main>
            </SessionProvider>
        </>
    );
  }
  