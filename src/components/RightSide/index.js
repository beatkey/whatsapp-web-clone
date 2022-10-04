import Default from "./Default";
import Message from "./Message";

import {useSelector} from "react-redux";

export default function RightSide() {
    const activeMessage = useSelector(state => state.message.activeMessage)
    return (
        <div className="RightSide h-full w-[70%] bg-[#222e35]">
            {
                activeMessage !== null
                    ?
                    <Default/>
                    :
                    <Message/>
            }
        </div>
    )
}
