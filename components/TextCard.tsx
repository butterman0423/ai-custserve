type Options = {
    name: string,
    time: number,
    text: string
}

export default function TextCard({
    name, time, text
}: Options) {
    const date = new Date(time);
    const ftime = date.toLocaleString();

    return (
        <div>
            <div>
                <span>{ name }</span>
                <span>{ ftime }</span>
            </div>
            <p>{ text }</p>
        </div>
    );
}