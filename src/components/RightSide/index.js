import Default from "./Default";
import Message from "./Message";
import ContactInfo from "./ContactInfo";
import SearchChat from "./SearchChat";

import {useSelector} from "react-redux";
import {useState} from "react";

export default function RightSide() {
   const activeMessage = useSelector(state => state.message.activeMessage)
   const [rightSide, setRightSide] = useState(false)
   let messages = useSelector(state => state.message.messages).find(value => {
      return value.name === activeMessage
   })

   const RightWrapper = () => {
      switch (rightSide) {
         case "contactInfo":
            return <ContactInfo setRightSide={setRightSide}/>
         case "search":
            return <SearchChat setRightSide={setRightSide} />
      }
   }

   if (!activeMessage) {
      return <Default/>
   } else {
      return <div className="flex h-full">
         <Message rightSide={rightSide} setRightSide={setRightSide} messages={messages}/>
         <RightWrapper/>
      </div>
   }
}
