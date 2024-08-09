import SignOutButton from "@/components/SignOutButton";
import { redirect } from "next/navigation";

import { auth } from "@/auth";

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
            <nav className="w-screen h-10">
                <SignOutButton/>
                <div className="float-end">
                    { session?.user?.name }
                </div>
            </nav>
            <main>{ children }</main>
        </>
    );
  }
  