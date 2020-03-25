import React from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../Actions/Index';
import { formatDate } from '../Utilites/UTC_Date';

class CommentList extends React.Component {
    renderList() {
        {/* We remove the last element as it contains information about the next 100 comments... */}
        return this.props.comments.slice(0, -1).map(comment => {
            return (
                <div key={comment.data.id}>
                    <div>{comment.data.author} | {formatDate(comment.data.created_utc)}</div>
                    <div>{comment.data.body}</div>
                    <hr/>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <ul className='namelist'>{this.renderList()}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("CommentList");
    console.log(state);
    return { comments: state.comments }
}

export default connect(mapStateToProps, { fetchComments })(CommentList);