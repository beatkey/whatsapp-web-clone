import Default from "./Default";
import Message from "./Message";

import {useDispatch, useSelector} from "react-redux";
import {createMessage} from "stores/Message";

export default function RightSide() {
    const dispatch = useDispatch();
    const activeMessage = useSelector(state => state.message.activeMessage)
    const messages = useSelector(state => state.message.messages).find(value => {
        return value.name === activeMessage
    })

    if (messages === undefined) {
        //dispatch(createMessage())
    }

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
