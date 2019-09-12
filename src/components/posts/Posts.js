import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPosts, deletePost } from '../../actions/posts';





export class Posts extends Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
        getPosts: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired

    };

    componentDidMount() {
        this.props.getPosts();
    }



    render() {
        return (
            <Fragment>
                <h1>Posts List</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.posts.map((post, i) => {
                            return (
                                <tr key={i}>
                                    <td>{post._id}</td>
                                    <td><Link to={`/${post._id}`}>{post.title}</Link></td>
                                    <td>{post.description}</td>
                                    <td>
                                        <Link to={`/edit/${post._id}`} className="btn btn-success mr-2">Edit</Link>
                                        <button onClick={this.props.deletePost.bind(this, post._id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>



            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.postReducer.posts
});

export default connect(mapStateToProps, { getPosts, deletePost })(Posts);
