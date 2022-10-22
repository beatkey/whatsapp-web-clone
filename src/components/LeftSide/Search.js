export default function Search({setFilterText}){
    return (
        <div className="Search flex items-center px-3 py-2">
            <div className="InputWrapper bg-color2 w-full px-3 py-1.5 flex items-center rounded-lg mr-3">
                <div className="Icon cursor-pointer text-icon mr-7">
                    <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                              d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                    </svg>
                </div>
                <div className="Input w-full">
                    <input
                        onChange={e => setFilterText(e.target.value)}
                        className="w-full bg-[transparent] outline-none placeholder:text-icon placeholder:text-[14px] text-[#d1d7db] text-[15px]"
                        type="text"
                        placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="cursor-pointer text-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" preserveAspectRatio="xMidYMid meet"
                     className="">
                    <path fill="currentColor"
                          d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"></path>
                </svg>
            </div>
        </div>
    )
}
