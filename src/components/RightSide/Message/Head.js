import {useSelector} from "react-redux";

import {UserAvatar} from "components/Global";

import {GetContact} from "helpers";

export default function Head() {
    const activeMessage = useSelector(state => state.message.activeMessage)
    const contact = GetContact(activeMessage);

    function openContactInfo(){
        console.log("dd")
    }

    return (
        <div
            className="bg-color2 h-[60px] px-4 pr-6 flex items-center justify-between border-l border-[rgba(134,150,160,0.15)]">
            <div onClick={openContactInfo} className="cursor-pointer flex items-center text-[#e9edef]">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden mr-3">
                    <UserAvatar type={contact.image}/>
                </div>
                {contact.name}
            </div>
            <div className="flex items-center text-[#aebac1] gap-4">
                <div>
                    <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                              d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
