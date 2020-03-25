import JsonPlaceholder from '../Apis/RedditApi';

//askreddit/top/.json?
export const fetchPosts = () => async dispatch => {
    const response = await JsonPlaceholder.get("r/askreddit/top/.json?count=20");
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data.data.children
    });
}

export const selectedPost = (post) => {
    return {
        type: 'POST_SELECTED',
        payload: post
    }
}

//redditdev/comments/8ck9mb/retrieve_comments_from_a_specific_post/.json
//Always returns an array with 2 objects
//response.data[0] is an object of the post containg information about the post
//response.data[1] is an array of comments each containing data about the comment and child comments related to the comment
export const fetchComments = (postUrl) => async dispatch => {
    const response = await JsonPlaceholder.get(`${postUrl}.json`);
    console.log("Fetch Comments");
    console.log(response.data[1].data.children);
    dispatch({
        type: 'FETCH_COMMENTS',
        payload: response.data[1].data.children
    });
}