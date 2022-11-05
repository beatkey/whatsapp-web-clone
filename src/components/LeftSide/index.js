import {useState} from "react";

import Head from "./Head";
import Search from "./Search";
import Messages from "./Messages";
import NewChat from "./NewChat";
import Archive from "./Archive";

export default function LeftSide() {
    const [filterText, setFilterText] = useState("")
    const [open, setOpen] = useState(false);
    const [archiveOpen, setArchiveOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function handleArchiveOpen(){
        setArchiveOpen(true)
    }

    function handleArchiveClose(){
        setArchiveOpen(false)
    }

    return (
        <div className="LeftSide h-full bg-color1 w-[30%] relative overflow-hidden">
            <Head handleDrawerOpen={handleDrawerOpen}/>
            <Search setFilterText={setFilterText}/>
            <Messages handleArchiveOpen={handleArchiveOpen} filterText={filterText}/>
            <NewChat drawerOpen={open} handleDrawerClose={handleDrawerClose}/>
            <Archive drawerOpen={archiveOpen} handleArchiveClose={handleArchiveClose}/>
        </div>
    )
}
