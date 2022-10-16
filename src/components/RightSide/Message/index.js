import {useSelector} from "react-redux";

import Head from "./Head";
import Actions from "./Actions";
import Messages from "./Messages";

export default function Message(){
    const activeMessage = useSelector(state => state.message.activeMessage)
    const messages = useSelector(state => state.message.messages)[activeMessage]

    return (
        <div className="flex flex-col h-full">
            <Head name={messages?.name} />
            <Messages messages={messages} />
            <Actions />
        </div>
    )
}
