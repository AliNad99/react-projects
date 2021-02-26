import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
import {ACTIONS} from "./reducer"


const url = 'https://course-api.com/react-useReducer-cart-project'


const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {

  const getLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if(cart && cart.length != 0){
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return fetchData();
    }
  }
  
  const [state, dispatch] = useReducer(reducer, getLocalStorage())

  const clearCart = () => {
    dispatch({type: ACTIONS.CLEAR_CART})
  }

  const remove = (id) => {
    dispatch({type:ACTIONS.REMOVE, payload: id})
  }

  const increase = (id) => {
    dispatch({type:ACTIONS.INCREASE, payload: id})
  }

  const decrease= (id) => {
    dispatch({type:ACTIONS.DECREASE, payload: id})
  }

  const getTotals = () => {
    dispatch({type:ACTIONS.GET_TOTALS})
  }

  async function fetchData() {
    dispatch({type:ACTIONS.LOADING})
    const response = await fetch(url)
    // fetch(url).catch(error=> console.log("Error", error))
    const cart = await response.json();
    dispatch({type:ACTIONS.DISPLAY_ITEMS, payload: cart})
  }

  const toggleAmount = ((id, type) => {
    dispatch({type:ACTIONS.TOGGLE_AMOUNT, payload:{id,type}})
  })


  useEffect(() => {
    getTotals();
    if(state.cart.length != 0){
      localStorage.setItem('cart', JSON.stringify(state))
    } else {
      fetchData()
    };
  },[state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
