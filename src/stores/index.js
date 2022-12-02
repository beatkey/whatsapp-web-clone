import {configureStore} from "@reduxjs/toolkit";

import message from "./Message";
import contacts from "./Contacts";
import modal from "./Modal";
import general from "./General";

const store = configureStore({
    reducer: {
        message,
        contacts,
        modal,
        general
    }
})

export default store
