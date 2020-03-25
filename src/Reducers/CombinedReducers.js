import { combineReducers } from 'redux';
import {fetchPostsReducer, selectedPostReducer} from './Post_Reducer';
import {fetchCommentsReducer} from './Comment_Reducer';

export default combineReducers ({
    posts: fetchPostsReducer,
    selectedPost: selectedPostReducer,
    comments: fetchCommentsReducer
});