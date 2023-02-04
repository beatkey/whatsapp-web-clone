import {useDispatch, useSelector} from "react-redux";
import {getMessage} from "./stores/Message";
import {useEffect} from "react";

export const GetContact = (name) => {
   return useSelector(state => state.contacts).find(contact => contact.name === name)
}

export const UUID = () => {
   return crypto.randomUUID();
};

export const AutoMessages = (contact) => {
   const dispatch = useDispatch()

   useEffect(() => {
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

               const alert = new Audio("/web_whatsapp.mp3")

               if (!("Notification" in window)) {
                  alert("This browser does not support Desktop notifications");
               }

               if (Notification.permission === "granted") {
                  alert.play()
               }

               if (Notification.permission !== "denied") {
                  Notification.requestPermission((permission) => {
                     if (permission === "granted") {
                        alert.play()
                     }
                  });
               }
            })
            .catch(err => console.error(err))
      }, 5000)


      return () => clearInterval(interval)
   }, [])
}
