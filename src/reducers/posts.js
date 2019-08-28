import { GET_POSTS, DELETE_POST, ADD_POST, GET_POST } from '../actions/types';

const initialState = {

    posts: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_POST:
            const index = state.posts.findIndex(post => post.id === action.payload);
            if (index > -1) {
                return state.posts.map(post => {
                    if (post.id === action.payload) return action.payload;
                    return post;
                });
            }

        case ADD_POST:
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