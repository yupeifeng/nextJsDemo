import {indexType} from '../actiontype';

let initStore = {
    list: [],
    title: '',
};

const indexStore = (state = initStore, action = {}) => {
    switch (action['type']) {
        case indexType.indexStore_change_store:
            return {...state, ...action.store};
        default:
            return state;
    }
};

export default indexStore;