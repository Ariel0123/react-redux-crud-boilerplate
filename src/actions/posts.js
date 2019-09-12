import axios from 'axios';
import { GET_POSTS, DELETE_POST, ADD_POST, GET_SINGLE_POST, UPDATE_POST } from './types';

//get posts
export const getPosts = () => dispatch => {
    axios.get('http://localhost:4000/')
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//add post
export const addPost = (post) => dispatch => {
    axios.post('http://localhost:4000/', post)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//get post
export const getPost = (id) => dispatch => {
    axios.get(`http://localhost:4000/${id}`)
        .then(res => {
            dispatch({
                type: GET_SINGLE_POST,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//update post
export const updatePost = (id, newPost) => dispatch => {
    axios.put(`http://localhost:4000/${id}`, newPost)
        .then(res => {
            dispatch({
                type: UPDATE_POST,
                payload: res.data
            });
        }).catch(err => console.log(err));
};




//delete post
export const deletePost = (id) => dispatch => {
    axios.delete(`http://localhost:4000/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: id
            });
        }).catch(err => console.log(err));
};