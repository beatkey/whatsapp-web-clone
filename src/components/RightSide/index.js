import Default from "./Default";
import Message from "./Message";

import {useSelector} from "react-redux";

export default function RightSide() {
    const activeMessage = useSelector(state => state.message.activeMessage)
    const messages = useSelector(state => state.message.messages).find(value => {
        return value.name === activeMessage
    })

    return (
        <div className="RightSide h-full w-[70%] bg-[#222e35]">
            {
                activeMessage == null || messages === undefined
                    ?
                    <Default/>
                    :
                    <Message messages={messages}/>
            }
        </div>
    )
}
