import {useSelector} from "react-redux";
import {useState} from "react";

export const GetContact = (name) => {
    return useSelector(state => state.contacts).find(contact => contact.name === name)
}

export const UUID = () => {
    return crypto.randomUUID();
};

export const AutoMessages = (contact) => {
    const [data, setData] = useState(null)

    async function getQuote() {
        await fetch('https://dummyjson.com/quotes/random')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err));
    }

    console.log(getQuote())

    console.log(contact)
}
