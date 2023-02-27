import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Modals from "./components/Modals";
import {AutoMessages} from "./helpers";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {
   const dispatch = useDispatch()
   const contacts = useSelector(state => state.contacts)

   useEffect(() => {
      setInterval(() => {
         const contact = contacts[Math.floor(Math.random() * contacts.length)]
         AutoMessages(contact, dispatch)
      }, 60 * 1000)
   }, [])

   return (
      <div className="App w-screen h-screen min-h-[512px] bg-color1">
         <Modals/>
         <div
            className="Wrapper h-full max-h-full flex 1441:top-[19px] relative 1441:w-[calc(100%-38px)] 1441:h-[calc(100%-38px)] 1441:max-w-[1600px] mx-auto shadow-[0_6px_18px_rgba(11,20,26,.05)]">
            <LeftSide/>
            <div className="RightSide h-full w-[70%] bg-[#222e35]">
               <RightSide/>
            </div>
         </div>
      </div>
   );
}

export default App;
