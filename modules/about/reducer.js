import {aboutType} from '../actiontype';

let initStore = {};

const aboutStore = (state = initStore, action = {}) => {
    switch (action['type']) {
        case aboutType.aboutStore_change_store:
            return {...state, ...action.store};
        default:
            return state;
    }
};

export default aboutStore;