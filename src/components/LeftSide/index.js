import {useState} from "react";

import Head from "./Head";
import Search from "./Search";
import Messages from "./Messages";

export default function LeftSide(){
    const [filterText, setFilterText] = useState("")

    return (
        <div className="LeftSide h-full bg-color1 w-[30%]">
            <Head />
            <Search setFilterText={setFilterText} />
            <Messages filterText={filterText} />
        </div>
    )
}
