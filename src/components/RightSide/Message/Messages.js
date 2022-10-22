import {useEffect, useRef} from "react";

export default function Messages({messages}) {
    const messageListWrapper = useRef(null)
    const messageList = useRef(null)

    useEffect(() => {
        messageListWrapper.current.scrollTop = messageList.current.clientHeight
    })

    return (
        <div className="Messages max-h-full w-full relative bg-[#0b141a] border-l border-[rgba(233,237,239,0.12)]">
            <div className="absolute w-full h-full bg-messagesBg bg-repeat bg-[#080a0a] opacity-[0.06]"></div>
            <div ref={messageListWrapper} className="w-full overflow-y-scroll max-h-full scrollbar">
                <div ref={messageList} className="MessageList max-h-full flex flex-col justify-end h-full py-5 relative gap-y-0.5">
                    {
                        messages !== null && messages.messages.map((value, index) =>
                            (value.status !== "received") ?
                                <div key={index} className="MessageWrapper flex justify-end pl-[9%] pr-[9%]">
                                    <div
                                        className="Message bg-[#005c4b] text-[#e9edef] text-[14px] inline-block rounded-md px-1.5 flex items-end">
                                        <div className="mr-1 px-1 py-1.5">
                                            {value.message}
                                        </div>
                                        <div className="flex items-center py-0.5 text-[hsla(0,0%,100%,0.6)]">
                                            <div className="mr-1 text-[12px]">
                                                {value.time}
                                            </div>
                                            <div>
                                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="">
                                                    <path
                                                        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374L11.07.653Zm-2.45 7.674a15.31 15.31 0 0 1-.546-.355.43.43 0 0 0-.317-.12.46.46 0 0 0-.362.158l-.292.33a.482.482 0 0 0 .013.666l1.079 1.073c.135.135.3.203.495.203a.699.699 0 0 0 .552-.267l6.62-8.391a.446.446 0 0 0 .109-.298.487.487 0 0 0-.178-.375l-.355-.273a.487.487 0 0 0-.673.076L8.62 8.327Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div key={index} className="MessageWrapper flex justify-start pl-[9%] pr-[9%]">
                                    <div
                                        className="Message bg-[#202c33] text-[#e9edef] text-[14px] inline-block rounded-md px-1.5 flex items-end">
                                        <div className="mr-1 px-1 py-1.5">
                                            {value.message}
                                        </div>
                                        <div className="flex items-center py-0.5 text-[hsla(0,0%,100%,0.6)]">
                                            <div className="mr-1 text-[12px]">
                                                {value.time}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
