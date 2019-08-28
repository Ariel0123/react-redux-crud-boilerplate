import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../../actions/posts';
import PropTypes from 'prop-types';


export class Form extends Component {
    static propTypes = {
        addPost: PropTypes.func.isRequired
    };

    state = {
        title: '',
        body: ''
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const { title, body } = this.state;
        const post = { title, body };

        this.props.addPost(post);
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
                        <button type="submit" className="btn btn-primary">Save</button>



                    </form>
                </div>

            </div>
        )
    }
}



export default connect(null, { addPost })(Form);
