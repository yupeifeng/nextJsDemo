import {aboutType} from '../actiontype';

let changeStore = store => dispatch => {
    dispatch({type: aboutType.aboutStore_change_store, store: store});
};

export {changeStore};