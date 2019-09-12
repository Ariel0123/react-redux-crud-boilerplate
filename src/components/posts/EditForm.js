import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPost, updatePost } from '../../actions/posts';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';



export class EditForm extends Component {

    static propTypes = {
        post: PropTypes.object,
        getPost: PropTypes.func.isRequired
    };



    state = {

        title: this.props.post.title,
        description: this.props.post.description,
        redir: false
    }

    componentDidMount = () => {
        this.props.getPost(this.props.match.params.id);
    };

    componentWillReceiveProps(nextProps) {

        this.setState({
            title: nextProps.post.title,
            description: nextProps.post.description

        });

    }



    onChange = e => {
        console.log();
        this.setState({


            [e.target.name]: e.target.value
        }
        )
    };



    onSubmit = e => {
        e.preventDefault();
        const { title, description } = this.state;
        const post = { title, description };
        this.props.updatePost(this.props.match.params.id, post);
        this.setState({
            redir: true
        })


    }

    render() {

        const { title, description, redir } = this.state;

        if (redir === true) {
            return <Redirect to="/" />
        }

        return (
            <div className="card">
                <div className="card-header">
                    <h1>Add post</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" name="title" onChange={this.onChange} value={title} />
                        </div>
                        <div className="form-group">
                            <label>Body</label>
                            <input type="text" className="form-control" name="description" onChange={this.onChange} value={description} />
                        </div>
                        <button type="submit" className="btn btn-success">Update</button>



                    </form>



                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

    post: state.postReducer.post

})

export default connect(mapStateToProps, { getPost, updatePost })(EditForm);
