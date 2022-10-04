import {configureStore} from "@reduxjs/toolkit";

import message from "./message";

const store = configureStore({
    reducer: {
        message
    }
})

export default store
