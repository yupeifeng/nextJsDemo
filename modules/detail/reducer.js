import {detailType} from '../actiontype';

let initStore = {};

const detailStore = (state = initStore, action = {}) => {
    switch (action['type']) {
        case detailType.detailStore_change_store:
            return {...state, ...action.store};
        default:
            return state;
    }
};

export default detailStore;