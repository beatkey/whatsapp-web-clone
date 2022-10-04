import {useSelector} from "react-redux";

import Head from "./Head";
import Actions from "./Actions";
import Messages from "./Messages";

export default function Message(){
    const activeMessage = useSelector(state => state.message.activeMessage)

    return (
        <div className="flex flex-col h-full">
            <Head />
            <Messages />
            <Actions />
        </div>
    )
}
