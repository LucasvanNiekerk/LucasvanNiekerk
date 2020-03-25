export const fetchPostsReducer = (posts=[], action) => {
    switch(action.type){
        case 'FETCH_POSTS': return action.payload;
        default: return posts;
    }
}

export const selectedPostReducer = (selectedPost=null, action) => {
    switch(action.type){
    case 'POST_SELECTED': return action.payload;
    default: return selectedPost;
    }
}