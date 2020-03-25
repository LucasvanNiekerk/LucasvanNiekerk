import React from 'react';
import { connect } from 'react-redux';

import CommentList from './CommentList';
import {formatFullDate} from '../Utilites/UTC_Date'

const PostDetail = ({post}) => {    
    console.log("Post detail");
    console.log(post);
    if(post){
        return(
            <div>
                <h2>{post.title}</h2>
                <div>Made by: {post.author} | {formatFullDate(post.created)}</div>
                <div>{post.selftext}</div>
                <hr/><br/>
                <CommentList></CommentList>
            </div>
        )
    }
    return null;
}


const mapStateToProps = (state) => {
    return { post: state.selectedPost }
}


export default connect(mapStateToProps)(PostDetail);