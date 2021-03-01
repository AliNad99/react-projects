import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm, cocktails, allCocktails} = useGlobalContext()
  const searchValue = useRef("");

  useEffect(()=>{
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" action="" onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
          <label htmlFor="name">search your favorite cocktail</label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
