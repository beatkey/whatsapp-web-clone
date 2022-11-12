import {useState} from "react";

import {useSelector, useDispatch} from "react-redux";
import {closeModal} from "../../stores/Modal";
import {muteContact} from "../../stores/Contacts";

export default function MuteContactModal() {
    const dispatch = useDispatch()
    const currentContact = useSelector(state => state.modal.currentContact)
    const [activeTime, setActiveTime] = useState(0)
    const times = [
        "8 Hours",
        "1 Week",
        "Always",
    ]

    function closeModalHandle(){
        dispatch(closeModal())
    }

    function muteContactHandle(){
        dispatch(muteContact(currentContact))
        dispatch(closeModal())
    }

    return (
        <div className="w-full h-full absolute bg-[rgba(11,20,26,0.85)] z-10 flex items-center justify-center">
            <div
                className="Content w-[500px] rounded-[3px] bg-[#3b4a54] p-5 shadow-[0_17px_50px_0_rgba(11,20,26,.19),0_12px_15px_0_rgba(11,20,26,.24)] text-[#d1d7db]">
                <div className="Head mb-4 text-[20px]">
                    Mute "{currentContact}" for...
                </div>
                <form className="Main mb-9">
                    <ul>
                        {
                            times.map((value, index) =>
                                <li key={index} className="mb-1">
                                    <label>
                                        <input name="time" value={index} className="mr-2"
                                               type="radio" checked={activeTime===index} onChange={(e) => setActiveTime(parseInt(e.target.value))} />
                                        {value}
                                    </label>
                                </li>
                            )
                        }
                    </ul>
                </form>
                <div className="Actions flex justify-end gap-3">
                    <button
                        onClick={closeModalHandle}
                        className="p-[10px_24px] text-[#00a884] rounded-[3px] border tracking-[1.25px] text-[14px] border-[rgba(134,150,160,0.15)]">
                        CANCEL
                    </button>
                    <button
                        onClick={muteContactHandle}
                        className="p-[10px_24px] text-[#111b21] bg-[#00a884] rounded-[3px] border tracking-[1.25px] text-[14px] border-[rgba(134,150,160,0.15)]">
                        MUTE NOTIFICATIONS
                    </button>
                </div>
            </div>
        </div>
    )
}
