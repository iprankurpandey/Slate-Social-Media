import React, { createContext, useContext, useReducer } from "react";

const composePostContext = createContext();
export const useComposePostContext = () => useContext(composePostContext);

function PostContext({ children }) {
  function postReducer(state, action) {
    switch (action.type) {
      case "GET_COMPOSE_POST":
        return {
          ...state,
          getComposePost: action.payload,
        };
      case "COMPOSE_POST":
        return {
          ...state,
          composePost: action.payload,
        };
      case "IMAGE":
        return {
          ...state,
          image: action.payload,
        };
      case "VIDEO":
        return {
          ...state,
          video: action.payload,
        };
      case "EDITOR_TEXT":
        return {
          ...state,
          editorText: action.payload,
        };
      case "USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "ADD_TO_BOOKMARKS":
        return {
          ...state,
          addToBookmarks: action.payload,
        };
      case "LIKESPOST":
        return {
          ...state,

          getComposePost: action.payload,
        };
      case "GET_POSTS_BY_USERNAME":
        return {
          ...state,

          getPostsByUserName: action.payload,
        };
      default:
        return state;
    }
  }

  const [state, postDispatch] = useReducer(postReducer, {
    composePost: [],
    getComposePost: [],
    image: "",
    video: "",
    editorText: "",
    username: "",
    addToBookmarks: [],
    likespost: [],
    getPostsByUserName: [],
  });
  const {
    composePost,
    getComposePost,
    image,
    video,
    editorText,
    username,
    addToBookmarks,
    likespost,
    getPostsByUserName,
  } = state;

  return (
    <div>
      <composePostContext.Provider
        value={{
          postDispatch,
          state,
          getComposePost,
          image,
          video,
          editorText,
          username,
          composePost,
          likespost,
          addToBookmarks,
          getPostsByUserName,
        }}
      >
        {children}
      </composePostContext.Provider>
    </div>
  );
}

export default PostContext;
