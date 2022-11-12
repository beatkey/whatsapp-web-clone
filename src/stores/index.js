import {configureStore} from "@reduxjs/toolkit";

import message from "./Message";
import contacts from "./Contacts";
import modal from "./Modal";

const store = configureStore({
    reducer: {
        message,
        contacts,
        modal
    }
})

export default store
