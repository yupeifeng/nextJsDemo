import {detailType} from '../actiontype';

let changeStore = store => dispatch => {
    dispatch({type: detailType.detailStore_change_store, store: store});
};

export {changeStore};