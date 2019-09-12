import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPost } from '../../actions/posts';
import PropTypes from 'prop-types';

export class Details extends Component {

    static propTypes = {
        post: PropTypes.object,
        getPost: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        const { post } = this.props;
        return (

            <div>
                <div className="card">
                    <div className="card-body">
                        <h1>{post.title}</h1>
                        <hr />
                        <p>{post.description}</p>

                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    post: state.postReducer.post

})

export default connect(mapStateToProps, { getPost })(Details);
