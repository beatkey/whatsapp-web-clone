import {useState} from "react";

import {useSelector, useDispatch} from "react-redux";
import {closeModal} from "../../stores/Modal";
import {muteContact} from "../../stores/Contacts";

export default function MuteContactModal() {
    const dispatch = useDispatch()

    function closeModalHandle(){
        dispatch(closeModal())
    }

    return (
        <div className="w-full h-full absolute bg-[rgba(11,20,26,0.85)] z-10 flex items-center justify-center">
            <div
                className="Content w-[436px] rounded-[3px] bg-[#3b4a54] shadow-[0_17px_50px_0_rgba(11,20,26,.19),0_12px_15px_0_rgba(11,20,26,.24)] text-[#d1d7db]">
                <div className="Head flex items-center bg-[#1f2c33] mb-4 text-[20px] p-5">
                    <div className="mr-5">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                             fill="currentColor" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path enableBackground="new" d="M19.1,17.2l-5.3-5.3l5.3-5.3l-1.8-1.8L12,10.2L6.7,4.9L4.9,6.6 l5.3,5.3l-5.3,5.3L6.7,19l5.3-5.3l5.3,5.3L19.1,17.2z"></path></svg>
                    </div>
                    Send Contacts
                </div>
                <div>
                    test
                </div>
            </div>
        </div>
    )
}
