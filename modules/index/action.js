import {indexType} from '../actiontype';

let changeStore = store => dispatch => {
    dispatch({type: indexType.indexStore_change_store, store: store});
};

export {changeStore};