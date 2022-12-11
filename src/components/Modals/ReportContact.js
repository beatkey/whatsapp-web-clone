import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../stores/Modal";

export default function ReportContact() {
   const dispatch = useDispatch()

   function closeModalHandle() {
      dispatch(closeModal())
   }

   function reportContactHandle() {
      dispatch(closeModal())
   }

   return (
      <div className="w-full h-full absolute bg-[rgba(11,20,26,0.85)] z-10 flex items-center justify-center">
         <div
            className="Content w-[500px] rounded-[3px] bg-[#3b4a54] p-5 shadow-[0_17px_50px_0_rgba(11,20,26,.19),0_12px_15px_0_rgba(11,20,26,.24)] text-[#d1d7db]">
            <div className="Head mb-4 text-[20px]">
               Report this contact to WhatsApp?
            </div>
            <label className="flex items-center mb-4">
               <div className="mr-3 flex items-center justify-center">
                  <input className="peer w-0 h-0 opacity-0"
                         value="test"
                         name="contacts"
                         type="checkbox"/>
                  <div
                     className="peer-checked:border-[#00a884] peer-checked:bg-[#00a884] transition-all relative w-[18px] h-[18px] border-2 rounded-[2px] border-[rgba(209,215,219,.75)] after:content-[] peer-checked:after:content-[''] after:transition-all after:rotate-[45deg] after:border-[#111b21] after:border-r-[2px] after:border-b-[2px] after:block after:w-[6px] after:h-[11px] after:absolute after:left-[4px] after:top-[1px]"></div>
               </div>
               Block contact and clear chat
            </label>
            <div className="w-full h-[1px] bg-[rgba(233,237,239,0.12)] mb-5"></div>
            <div className="text-[14px] text-[#8696a0] mb-5">
               The last 5 messages from this contact will be forwarded to WhatsApp. If you block this contact and clear
               the chat, messages will only be removed from this device and your devices on the newer versions of
               WhatsApp.
            </div>
            <div className="text-[14px] text-[#8696a0] mb-10">
               This contact will not be notified.
            </div>
            <div className="Actions flex justify-end gap-3">
               <button
                  onClick={closeModalHandle}
                  className="p-[10px_24px] text-[#00a884] rounded-[3px] border tracking-[1.25px] text-[14px] border-[rgba(134,150,160,0.15)] hover:bg-[rgba(233,237,239,0.05)] hover:text-[#06cf9c] transition-all">
                  CANCEL
               </button>
               <button
                  onClick={reportContactHandle}
                  className="p-[10px_24px] text-[#111b21] bg-[#00a884] rounded-[3px] border tracking-[1.25px] text-[14px] border-[rgba(134,150,160,0.15)] hover:bg-[#06cf9c] transition-all">
                  REPORT
               </button>
            </div>
         </div>
      </div>
   )
}
