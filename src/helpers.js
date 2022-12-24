import {useSelector} from "react-redux";

export const GetContact = (name) => {
    return useSelector(state => state.contacts).find(contact => contact.name === name)
}

export const UUID = () => {
    return crypto.randomUUID();
};
