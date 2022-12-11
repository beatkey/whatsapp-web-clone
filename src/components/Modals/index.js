import {useSelector} from "react-redux";

import MuteContact from "./MuteContact";
import SendContact from "./SendContact";
import DeleteChat from "./DeleteChat";
import ReportContact from "./ReportContact";
import BlockContact from "./BlockContact";
import UnBlockContact from "./UnBlockContact";
import ProfilePhoto from "./ProfilePhoto";

const modals = {
    muteContact: <MuteContact />,
    sendContact: <SendContact />,
    deleteChat: <DeleteChat />,
    reportContact: <ReportContact />,
    blockContact: <BlockContact />,
    unBlockContact: <UnBlockContact />,
    profilePhoto: <ProfilePhoto />
}

export default function Modals(){
    const activeModal = useSelector(state => state.modal.activeModal)
    if(activeModal !== null){
        return modals[activeModal]
    }
}
