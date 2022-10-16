import Message from "./Message";

import {useDispatch, useSelector} from "react-redux";
import {setActiveMessage} from "stores/message";

export default function Messages(){
    const dispath = useDispatch()
    const activeMessage = useSelector(state => state.message.activeMessage)
    const messages = useSelector(state => state.message.messages)

    function activeMessageHandle(index){
        dispath(setActiveMessage(index))
    }

    return (
        <div className="Messages overflow-y-scroll overflow-x-hidden overflow scroolbar">
            <div className="Archived cursor-pointer flex items-center py-3 px-7">
                <div className="mr-7">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="">
                        <path
                            d="m18.54 3.23-1.39-1.68C16.88 1.21 16.47 1 16 1H4c-.47 0-.88.21-1.16.55L1.46 3.23C1.17 3.57 1 4.02 1 4.5V17c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4.5c0-.48-.17-.93-.46-1.27ZM4.24 3h11.52l.81.97H3.44l.8-.97ZM3 17V6h14v11H3Zm8.45-9h-2.9v3H6l4 4 4-4h-2.55V8Z"
                            fill="#00a884"></path>
                    </svg>
                </div>
                <div className="text-[#fff] text-[17px]">
                    Archived
                </div>
            </div>
            {
                messages.map((value, index) => (
                    <Message activeMessageHandle={activeMessageHandle} activeMessage={activeMessage} key={index} index={index} value={value} />
                ))
            }
        </div>
    )
}
