import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts, selectedPost, fetchComments } from '../Actions/Index';

class PostsList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
        console.log("PostList didMount");
        console.log(this.props);
    }

    renderList() {
        return this.props.posts.slice(0, 10).map(post => {
            return (
                <Link to={`/Post/${post.data.subreddit}/${post.data.title}`} key={post.data.created_utc} style={{ textDecoration: 'none' }}>
                    <li className='item' style={{ listStyleType: 'none' }} onClick={() => {
                        this.props.selectedPost(post.data);
                        console.log(post.data.permalink);
                        this.props.fetchComments(post.data.permalink);
                        }}>
                        <h5>
                            <strong>{post.data.title}</strong>
                        </h5>
                        <hr></hr>
                    </li>
                    <br></br>
                </Link>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                <ul className='namelist'>{this.renderList()}</ul>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts, selectedPost, fetchComments })(PostsList);