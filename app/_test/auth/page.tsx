import { auth } from "@/auth";

import { InButton } from "./InButton";
import { OutButton } from "./OutButton"

export default async function AuthTest() {
    const session = await auth();
    return (
        <div>
            { session ?
                <OutButton/>
                :
                <div>
                    <InButton provider=""/>
                </div>
            }
        </div>
    );
}