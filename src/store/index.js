import { createStore } from "vuex";

import counterModule from "./modules/counter";

const store = createStore({
    modules: {
        counterMod: counterModule
    }
})

export default store;