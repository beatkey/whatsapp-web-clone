import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../stores/Modal";

export default function ProfilePhoto() {
   const dispatch = useDispatch()

   function closeModalHandle() {
      dispatch(closeModal())
   }

   return (
      <div className="w-full h-full absolute bg-[rgba(11,20,26,0.85)] z-10 flex items-center justify-center">
         test
      </div>
   )
}
