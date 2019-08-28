import axios from 'axios';
import { GET_POSTS, DELETE_POST, ADD_POST, GET_POST } from './types';

//get posts
export const getPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//add post
export const addPost = (post) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts/', post)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//get post
export const getPost = (id) => dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            dispatch({
                type: GET_POST,
                payload: res.data
            });
        }).catch(err => console.log(err));
};



//delete post
export const deletePost = (id) => dispatch => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: id
            });
        }).catch(err => console.log(err));
};