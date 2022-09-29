import Head from "./Head";
import Search from "./Search";
import Messages from "./Messages";

export default function LeftSide(){
    return (
        <div className="LeftSide h-full bg-color1 w-[30%]">
            <Head />
            <Search />
            <Messages />
        </div>
    )
}
