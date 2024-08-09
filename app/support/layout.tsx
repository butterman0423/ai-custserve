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
            <nav className="bg-primary p-4 z-10 shadow-lg shadow-black">
                <SignOutButton className="h-full w-auto"/>
                <div className="float-end">
                    { session?.user?.name }
                </div>
            </nav>
            <SessionProvider session={session}>
                <main>{ children }</main>
            </SessionProvider>
        </>
    );
  }
  