function NewChat() {
    return (
        <div className="NewChat absolute w-full h-full left-0 top-0 bg-[#111b21]">
            <div className="Head h-[108px] bg-[#202c33] flex items-end text-[#d9dee0] p-5">
                <div className="mr-3">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                         version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                </div>
                New Chat
            </div>
        </div>
    );
}

export default NewChat;
