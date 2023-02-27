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

export const AutoMessages = (contact, dispatch) => {
   dispatch(enableTyping(contact.name))

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
         setTimeout(() => {
            dispatch(getMessage(payload))
            dispatch(disableTyping(contact.name))
         }, 5000)
      })
      .catch(err => console.error(err))
}
