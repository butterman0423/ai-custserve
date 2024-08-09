'use client'

export default function Test() {
    const handleKeyDown = (e:any) => {
        console.log(e)
        if(e.key == "Enter"){
            console.log("huzzah")
        }
    }
    return (
        <div>
            <h1>Hello World</h1>
            <input onKeyDown={(e) => handleKeyDown(e)}/>
        </div>
    );
}