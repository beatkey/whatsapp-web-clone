import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import Head from "./Head";
import Actions from "./Actions";
import Messages from "./Messages";

export default function Message(){
    const activeMessage = useSelector(state => state.message.activeMessage)
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        getMessages(activeMessage)
    }, [activeMessage])

    const getMessages = async (id) => {
        const data = await fetch("/data.json")
        const res = await data.json()
        setMessages(res[id])
    }

    return (
        <div className="flex flex-col h-full">
            <Head name={messages?.name} />
            <Messages messages={messages} />
            <Actions />
        </div>
    )
}
