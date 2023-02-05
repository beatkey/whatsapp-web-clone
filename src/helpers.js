import {useDispatch, useSelector} from "react-redux";
import {getMessage} from "./stores/Message";
import {useEffect} from "react";
import {disableTyping, enableTyping} from "./stores/Contacts";

export const GetContact = (name) => {
   return useSelector(state => state.contacts).find(contact => contact.name === name)
}

export const UUID = () => {
   return crypto.randomUUID();
};

export const AutoMessages = () => {
   const dispatch = useDispatch()

   const contact = useSelector(state => {
      const data = state.contacts
      return data[Math.floor(Math.random() * data.length)]
   })

   useEffect(() => {
      dispatch(enableTyping(contact.name))

      const interval = setInterval(() => {
         async function getQuote() {
            const res = await fetch('https://dummyjson.com/quotes/random')
            return await res.json();
         }

         getQuote()
            .then(data => {
               const payload = {
                  "name": contact.name,
                  "message": data.quote
               }
               dispatch(getMessage(payload))
               //dispatch(disableTyping(contact.name))
            })
            .catch(err => console.error(err))
      }, 5000)


      return () => clearInterval(interval)
   }, [contact])
}
