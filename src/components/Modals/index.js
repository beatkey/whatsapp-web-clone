import {useSelector} from "react-redux";

import MuteContact from "./MuteContact";
import SendContact from "./SendContact";

const modals = {
    muteContact: <MuteContact />,
    sendContact: <SendContact />,
}

export default function Modals(){
    const activeModal = useSelector(state => state.modal.activeModal)
    if(activeModal !== null){
        return modals[activeModal]
    }
}
