function App() {
    return (
        <div className="App w-screen h-screen bg-color1">
            <div
                className="Wrapper 1441:py-5 1441:w-[calc(100%-38px)] 1441:h-[calc(100%-38px)] 1441:max-w-[1600px] mx-auto shadow-[0_6px_18px_rgba(11,20,26,.05)]">
                <div className="LeftSide h-full bg-color1 w-[30%]">
                    <div className="Head bg-color2 h-[60px] px-4 flex items-center justify-between">
                        <div className="Profile flex items-center h-full">
                            <svg viewBox="0 0 212 212" width="40" height="40" className="">
                                <path fill="#DFE5E7" className="background"
                                      d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path>
                                <g fill="#FFF">
                                    <path className="primary"
                                          d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="Actions text-color3 flex text-center gap-6 pr-2">
                            <div className="Story">
                                <svg version="1.1" id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" x="0" y="0"
                                     viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor"
                                          d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path>
                                    <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
                                </svg>
                            </div>
                            <div className="Message">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor"
                                          d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path>
                                </svg>
                            </div>
                            <div className="Settings">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor"
                                          d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="Search flex items-center px-3 py-2">
                        <div className="InputWrapper bg-color2 w-full px-3 py-2 flex items-center rounded-lg mr-3">
                            <div className="Icon text-icon mr-7">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor"
                                          d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                                </svg>
                            </div>
                            <div className="Input">
                                <input className="bg-[transparent] outline-none text-icon" type="text"
                                       placeholder="Search or start new chat"/>
                            </div>
                        </div>
                        <div className="text-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" preserveAspectRatio="xMidYMid meet"
                                 className="">
                                <path fill="currentColor"
                                      d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="Messages">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
