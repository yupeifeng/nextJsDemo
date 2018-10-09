import {combineReducers} from 'redux';
import about from './about/reducer';
import detail from './detail/reducer';
import index from './index/reducer';

const reducers = {
    about,
    detail,
    index
};

export default combineReducers(reducers);