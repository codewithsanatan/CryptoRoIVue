import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import state from './state';

const counterModule = {
    namespaced: true,
    // state() {
    //     return {
    //         count: 110,
    //         person: {
    //             f_name: 'First Name',
    //             l_name: 'Last Name'
    //         },
    //         postData: null,
    //     }
    // },
    state,
    mutations,
    actions,
    getters
}

export default counterModule;