const getters = {
    personName(state) {
        return state.person.f_name + " " + state.person.l_name;
    }
}

export default getters;