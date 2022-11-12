import {useSelector} from "react-redux";

import MuteContactModal from "./MuteContactModal";

const modals = {
    muteContact: <MuteContactModal />
}

export default function Modals(){
    const activeModal = useSelector(state => state.modal.activeModal)
    if(activeModal !== null){
        return modals[activeModal]
    }
}
