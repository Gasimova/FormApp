import React, { createContext, useContext, useReducer } from 'react'
import { PROVIDER_TYPE } from './type';


const createGlobal = createContext();

const initialState = {
  posts: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case PROVIDER_TYPE.FILL_POSTS:
      return { ...state, posts: action.payload }
    case PROVIDER_TYPE.REMOVE_POST:

    console.log(action, 'action');
      const newState = state.posts.filter(post => post.id !== action.payload)
      console.log({...state, newState}, 'state');
      return {...state,posts: newState}

    default:
      return state
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <createGlobal.Provider value={{ state, dispatch }} >{children}</createGlobal.Provider>
}

export const useGloablProvider = () => {
  const value = useContext(createGlobal)

  return value
}
