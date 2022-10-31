import {configureStore} from "@reduxjs/toolkit";

import message from "./Message";
import contacts from "./Contacts";

const store = configureStore({
    reducer: {
        message,
        contacts
    }
})

export default store
