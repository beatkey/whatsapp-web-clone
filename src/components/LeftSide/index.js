import {useState} from "react";

import Head from "./Head";
import Search from "./Search";
import Messages from "./Messages";
import NewChat from "./NewChat";

export default function LeftSide() {
    const [filterText, setFilterText] = useState("")
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className="LeftSide h-full bg-color1 w-[30%] relative overflow-hidden">
            <Head handleDrawerOpen={handleDrawerOpen}/>
            <Search setFilterText={setFilterText}/>
            <Messages filterText={filterText}/>
            <NewChat drawerOpen={open} handleDrawerClose={handleDrawerClose}/>
        </div>
    )
}
