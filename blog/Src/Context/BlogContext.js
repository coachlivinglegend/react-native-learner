import React, { createContext, useReducer, useState } from 'react';
import createDataContext from './createDataContext'

// const BlogContext = createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOGPOST':
            return [...state, { id: Math.floor(Math.random() * 99999), title: `Blog Post#${state.length + 1}`}]    
        case 'DELETE_BLOGPOST':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
}
//the addblogpost here is returning a function that calls dispatch.
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'ADD_BLOGPOST' })
    }
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'DELETE_BLOGPOST' , payload: id })
    }
}

// export const BlogProvider = ({ children }) => {

//     // const [blogPosts, setBlogPosts] = useState([]);
//     const [state, dispatch] = useReducer(blogReducer, [])

//     // const addBlogPost = () => {
//     //     setBlogPosts([...blogPosts, {title: `Blogost#${blogPosts.length + 1}`}])
//     // }


//     return (
//         <BlogContext.Provider 
//             value={{ data: state, addBlogPost }}>
//             {children}
//         </BlogContext.Provider>
//     )
// }

// export default BlogContext;

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [])