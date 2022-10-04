export default function Messages(){
    return (
        <div className="flex-auto Messages w-full relative bg-[#0b141a] border-l border-[rgba(233,237,239,0.12)]">
            <div className="absolute w-full h-full bg-messagesBg bg-repeat bg-[#080a0a] opacity-[0.06]"></div>
            <div className="MessageList flex flex-col justify-end h-full pb-5 relative">
                <div className="MessageWrapper flex justify-end pl-[9%] pr-[9%]">
                    <div className="Message bg-[#005c4b] text-[#e9edef] text-[14px] inline-block rounded-md px-2 py-1.5">
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
        </div>
    )
}
