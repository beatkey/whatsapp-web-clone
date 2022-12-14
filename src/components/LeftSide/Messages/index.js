import Message from "./Message";

import {useDispatch, useSelector} from "react-redux";
import {setActiveMessage} from "stores/Message";

export default function Messages({filterText, handleArchiveOpen}) {
    const dispatch = useDispatch()
    const activeMessage = useSelector(state => state.message.activeMessage)
    const messages = useSelector(state => {
        const all = state.message.messages
            .filter(value => !value.archived)
            .sort((a, b) => {
                return b.messages.at(-1).time - a.messages.at(-1).time
            })


        if (filterText.length > 0) {
            return all.filter(value => value.name.toLowerCase().includes(filterText.toLowerCase()))
        }

        return all
    })
    const contacts = useSelector(state => state.contacts)
    const data = []
    messages.map((value) => {
        data.push({
            ...value,
            ...contacts.find(contact => contact.name === value.name)
        })
    })

    data.sort((a, b) => {
        return a?.pinned ? -1 : 1
    })

    function activeMessageHandle(name) {
        dispatch(setActiveMessage(name))
    }

    return (
        <div className="Messages overflow-y-scroll overflow-x-hidden overflow scrollbar">
            <div onClick={handleArchiveOpen} className="Archived cursor-pointer flex items-center py-3 px-7">
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
                data.map((value, index) => (
                    <Message activeMessageHandle={activeMessageHandle} activeMessage={activeMessage} key={index}
                             index={index} value={value}/>
                ))
            }
        </div>
    )
}
