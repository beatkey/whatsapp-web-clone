import {useSelector} from "react-redux";

export const GetContactImage = (name) => {
    const contact = useSelector(state => state.contacts).find(contact => contact.name === name)
    return contact ? contact.image : "svg-solo"
}
