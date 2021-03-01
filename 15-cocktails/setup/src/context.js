import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {


  const [loading, setLoading] = useState(false);
  const [searchTerm,setSearchTerm] = useState("");
  const [cocktails,setCocktails] = useState([]);
  const [allCocktails, setAllCocktails] = useState([]);

  const setNewCocktails = () => {
    const newDrinks = allCocktails.filter(item =>{
      const {id,name,image,info} = item;
        const nameC = name.toUpperCase();
        const infoC = info.toUpperCase();
        const searchTermC = searchTerm.toUpperCase();
        return nameC.includes(searchTermC)||infoC.includes(searchTerm)
    })
    setCocktails(newDrinks);

  }

  const fetchDrinks = async () => {
    setLoading(true);
    try{
      const response = await fetch(`${url}`);
      const data = await response.json()
      const {drinks} = data;
      if(drinks){
        const newDrinks = drinks.map(item =>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item;
          return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
        })
        setAllCocktails(newDrinks)
        setLoading(false);
      }else{
        setAllCocktails([])
        setLoading(false);
      }
    } catch(error){
      console.log(error)
      setLoading(false);
    }
  }


  useLayoutEffect(() => {
    fetchDrinks();

  }, [])

  useEffect(() => {
    setNewCocktails();
  }, [searchTerm])

  return (
    <AppContext.Provider 
    value={{
      loading, 
      allCocktails,
      cocktails,
      setSearchTerm,
    }}>
      {children}
    </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

