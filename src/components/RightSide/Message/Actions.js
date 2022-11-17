import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {sendFile, sendMessage} from "stores/Message";

export default function Actions() {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false)
    const input = useCallback(inputElement => {
        inputElement && inputElement.focus()
    })

    const messageHandle = (e) => {
        e.preventDefault()
        setMessage("")
        dispatch(sendMessage(message))
    }

    function openHandle(e) {
        setOpen(open => !open)
    }

    function photoVideoUploadHandle(e){
        const file = e.target.files[0]
        const fileType = file.type.split("/")[0]
        const fileUrl = URL.createObjectURL(file)
        dispatch(sendFile({
            fileType,
            fileUrl
        }))
        setOpen(false)
    }

    return (
        <div className="bg-color2 h-[62px] px-5 pl-2 flex border-l border-[rgba(134,150,160,0.15)]">
            <div className="flex text-[#8696a0] mr-2">
                <div className="p-2 flex items-center">
                    <svg viewBox="0 0 24 24" width="26" height="26" className="ekdr8vow dhq51u3o">
                        <path fill="currentColor"
                              d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path>
                    </svg>
                </div>
                <div
                    className={"flex items-center cursor-pointer relative"}
                    onClick={openHandle}
                >
                    <div className={"p-2 transition-all rounded-full " + (open && "bg-[hsla(0,0%,100%,0.1)]")}>
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor"
                                  d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path>
                        </svg>
                    </div>
                    <div
                        className={"absolute transition-all top-0 left-1/2 -translate-x-1/2 -translate-y-full " + (open ? "opacity-100 pointer-events-auto" : 'opacity-0 pointer-events-none')}>
                        <div className="group flex items-center rounded-full overflow-hidden mb-3">
                            <div>
                                <svg viewBox="0 0 53 53" width="53" height="53" className="">
                                    <defs>
                                        <circle id="contact-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                                    </defs>
                                    <clipPath id="contact-SVGID_2_">
                                        <use xlinkHref="#contact-SVGID_1_" overflow="visible"></use>
                                    </clipPath>
                                    <g clipPath="url(#contact-SVGID_2_)">
                                        <path fill="#0795DC"
                                              d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"></path>
                                        <path fill="#0EABF4"
                                              d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"></path>
                                    </g>
                                    <g fill="#F5F5F5">
                                        <path id="svg-contact"
                                              d="M26.5 26.5A4.5 4.5 0 0 0 31 22a4.5 4.5 0 0 0-4.5-4.5A4.5 4.5 0 0 0 22 22a4.5 4.5 0 0 0 4.5 4.5Zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125c0 .619.506 1.125 1.125 1.125h15.75c.619 0 1.125-.506 1.125-1.125V33.25c0-2.992-5.996-4.5-9-4.5Z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div
                                className="min-w-max opacity-0 group-hover:opacity-100 transition-all absolute left-full ml-3 px-4 py-1 text-[14px] rounded-full text-[#000] bg-[#fff]">
                                Contact
                            </div>
                        </div>
                        <div className="group flex items-center rounded-full overflow-hidden mb-3">
                            <div>
                                <svg viewBox="0 0 53 53" width="53" height="53" className="">
                                    <defs>
                                        <circle id="document-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                                    </defs>
                                    <clipPath id="document-SVGID_2_">
                                        <use xlinkHref="#document-SVGID_1_" overflow="visible"></use>
                                    </clipPath>
                                    <g clipPath="url(#document-SVGID_2_)">
                                        <path fill="#5157AE"
                                              d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"></path>
                                        <path fill="#5F66CD"
                                              d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"></path>
                                    </g>
                                    <g fill="#F5F5F5">
                                        <path id="svg-document"
                                              d="M29.09 17.09c-.38-.38-.89-.59-1.42-.59H20.5c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H32.5c1.1 0 2-.9 2-2V23.33c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM27.5 22.5V18l5.5 5.5h-4.5c-.55 0-1-.45-1-1z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div
                                className="min-w-max opacity-0 group-hover:opacity-100 transition-all absolute left-full ml-3 px-4 py-1 text-[14px] rounded-full text-[#000] bg-[#fff]">
                                Document
                            </div>
                        </div>
                        <label className="group cursor-pointer flex items-center rounded-full overflow-hidden mb-3">
                            <div>
                                <svg viewBox="0 0 53 53" width="53" height="53" className="">
                                    <defs>
                                        <circle id="image-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                                    </defs>
                                    <clipPath id="image-SVGID_2_">
                                        <use xlinkHref="#image-SVGID_1_" overflow="visible"></use>
                                    </clipPath>
                                    <g clipPath="url(#image-SVGID_2_)">
                                        <path fill="#AC44CF"
                                              d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"></path>
                                        <path fill="#BF59CF"
                                              d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"></path>
                                        <path fill="#AC44CF" d="M17 24.5h18v9H17z"></path>
                                    </g>
                                    <g fill="#F5F5F5">
                                        <path id="svg-image"
                                              d="M18.318 18.25h16.364c.863 0 1.727.827 1.811 1.696l.007.137v12.834c0 .871-.82 1.741-1.682 1.826l-.136.007H18.318a1.83 1.83 0 0 1-1.812-1.684l-.006-.149V20.083c0-.87.82-1.741 1.682-1.826l.136-.007h16.364Zm5.081 8.22-3.781 5.044c-.269.355-.052.736.39.736h12.955c.442-.011.701-.402.421-.758l-2.682-3.449a.54.54 0 0 0-.841-.011l-2.262 2.727-3.339-4.3a.54.54 0 0 0-.861.011Zm8.351-5.22a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div
                                className="min-w-max opacity-0 group-hover:opacity-100 transition-all absolute left-full ml-3 px-4 py-1 text-[14px] rounded-full text-[#000] bg-[#fff]">
                                Photos & Videos
                            </div>
                            <input onChange={photoVideoUploadHandle} className="w-0 h-0" type="file"/>
                        </label>
                    </div>
                </div>
            </div>
            <form onSubmit={messageHandle} className="flex items-center w-full">
                <div className="w-full">
                    <input ref={input} value={message} onChange={(event) => setMessage(event.target.value)} type="text"
                           placeholder="Type a message"
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
