import {useSelector} from "react-redux";

import Head from "./Head";
import Actions from "./Actions";

export default function Message(){
    const activeMessage = useSelector(state => state.message.activeMessage)

    return (
        <div className="flex flex-col h-full">
            <Head />
            <div className="Messages w-full h-full bg-messagesBg bg-[length:412.5px_749.25px] bg-repeat bg-[#080a0a]">

            </div>
            <Actions />
        </div>
    )
}
