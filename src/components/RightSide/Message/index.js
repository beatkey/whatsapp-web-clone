import Head from "./Head";
import Actions from "./Actions";
import Messages from "./Messages";

export default function Message({messages}) {
    return (
        <div className="w-full h-full grid grid-rows-[60px_calc(100%-120px)_60px]">
            <Head/>
            <Messages messages={messages}/>
            <Actions/>
        </div>
    )
}
