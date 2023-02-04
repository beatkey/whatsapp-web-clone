import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Modals from "./components/Modals";
import {useEffect} from "react";
import {AutoMessages, GetContact} from "./helpers";
import {useSelector} from "react-redux";

function App() {
   const contact = useSelector(state => {
      const data = state.contacts
      return data[Math.floor(Math.random() * data.length)]
   })

   AutoMessages(contact)

   return (
      <div className="App w-screen h-screen min-h-[512px] bg-color1">
         <Modals/>
         <div
            className="Wrapper h-full max-h-full flex 1441:top-[19px] relative 1441:w-[calc(100%-38px)] 1441:h-[calc(100%-38px)] 1441:max-w-[1600px] mx-auto shadow-[0_6px_18px_rgba(11,20,26,.05)]">
            <LeftSide/>
            <RightSide/>
         </div>
      </div>
   );
}

export default App;
