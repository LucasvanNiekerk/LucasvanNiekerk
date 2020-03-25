export const fetchCommentsReducer = (comments=[], action) => {
    switch(action.type){
        case 'FETCH_COMMENTS': return action.payload;
        default: return comments;
    }
}