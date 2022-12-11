import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../stores/Modal";
import {deleteMessage} from "../../stores/Message";

export default function DeleteChat() {
   const dispatch = useDispatch()
   const activeMessage = useSelector(state => state.message.activeMessage)

   function closeModalHandle(){
      dispatch(closeModal())
   }

   function deleteChatHandle(){
      dispatch(deleteMessage(activeMessage))
      dispatch(closeModal())
   }

   return (
      <div className="w-full h-full absolute bg-[rgba(11,20,26,0.85)] z-10 flex items-center justify-center">
         <div
            className="Content w-[500px] rounded-[3px] bg-[#3b4a54] p-5 shadow-[0_17px_50px_0_rgba(11,20,26,.19),0_12px_15px_0_rgba(11,20,26,.24)] text-[#d1d7db]">
            <div className="Head mb-4 text-[20px]">
               Changes to clearing or deleting a chat
            </div>
            <div className="text-[14px] text-[#8696a0] mb-10">
               Clearing or deleting entire chats will only remove messages from this device and your devices on the newer versions of WhatsApp.
            </div>
            <div className="Actions flex justify-end gap-3">
               <button
                  onClick={closeModalHandle}
                  className="p-[10px_24px] text-[#00a884] rounded-[3px] border tracking-[1.25px] text-[14px] border-[rgba(134,150,160,0.15)] hover:bg-[rgba(233,237,239,0.05)] hover:text-[#06cf9c] transition-all">
                  CANCEL
               </button>
               <button
                  onClick={deleteChatHandle}
                  className="p-[10px_24px] text-[#111b21] bg-[#00a884] rounded-[3px] border tracking-[1.25px] text-[14px] border-[rgba(134,150,160,0.15)] hover:bg-[#06cf9c] transition-all">
                  CONTINUE
               </button>
            </div>
         </div>
      </div>
   )
}
