import { GET_POSTS, DELETE_POST, ADD_POST, GET_SINGLE_POST, UPDATE_POST } from '../actions/types';

const initialState = {

    posts: [],
    post: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_SINGLE_POST:
            return {
                ...state,
                post: action.payload
            }

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]

            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        default:
            return state;
    }

}