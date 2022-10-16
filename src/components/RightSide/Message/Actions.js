import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {sendMessage} from "stores/message";

export default function Actions() {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("");
    const input = useCallback(inputElement => {
        inputElement && inputElement.focus()
    })

    const messageHandle = (e) => {
        e.preventDefault()
        setMessage("")
        dispatch(sendMessage(message))
    }

    return (
        <div className="bg-color2 h-[62px] px-5 flex items-center border-l border-[rgba(134,150,160,0.15)]">
            <div className="flex items-center gap-4 text-[#8696a0] mr-5">
                <div>
                    <svg viewBox="0 0 24 24" width="26" height="26" className="ekdr8vow dhq51u3o">
                        <path fill="currentColor"
                              d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                              d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path>
                    </svg>
                </div>
            </div>
            <form onSubmit={messageHandle} className="flex items-center w-full">
                <div className="w-full">
                    <input ref={input} value={message} onChange={(event) => setMessage(event.target.value)} type="text" placeholder="Type a message"
                           className="bg-[#2a3942] outline-none text-[#d1d7db] border border-[#2a3942] rounded-lg py-2 px-3 w-full placeholder:text-[15px] placeholder:pl-1 placeholder:text-[#8696a0]"/>
                </div>
                <button className="ml-5 cursor-pointer" type="submit">
                    <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#8696a0]">
                        <path fill="currentColor"
                              d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
                    </svg>
                </button>
            </form>
        </div>
    )
}
