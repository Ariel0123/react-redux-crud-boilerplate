import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPost } from '../../actions/posts';
import PropTypes from 'prop-types';


export class EditForm extends Component {

    static propTypes = {
        post: PropTypes.array.isRequired,
        getPost: PropTypes.func.isRequired
    };

    state = {

        title: this.props[0].post.title,
        body: this.props[0].post.body
    }


    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            title: nextProps.posts.title,
            body: nextProps.posts.body
        })

    };

    componentDidMount = () => {
        this.props.getPost(this.props.match.params.id);
        console.log(this.title, this.body);
    };

    onSubmit = e => {
        e.preventDefault();
        const { title, body } = this.state;
        const post = { title, body };



    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h1>Add post</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" name="title" onChange={this.onChange} value={this.state.title} />
                        </div>
                        <div className="form-group">
                            <label>Body</label>
                            <input type="text" className="form-control" name="body" onChange={this.onChange} value={this.state.body} />
                        </div>
                        <button type="submit" className="btn btn-success">Update</button>



                    </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

    post: state.postReducer.posts.find(post => post.id === props.match.params.id)

})

export default connect(mapStateToProps, { getPost })(EditForm);
