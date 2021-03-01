import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail(){
      try{
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        if(data.drinks){
          const {
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass, 
            strCategory, 
            strInstructions, 
            strIngredient1, 
            strIngredient2, 
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1, 
            strIngredient2, 
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          ]
          const newCocktail = {
            category: strCategory, 
            instructions: strInstructions, 
            name: strDrink, 
            image: strDrinkThumb, 
            info: strAlcoholic, 
            glass: strGlass, 
            ingredients: ingredients,
          }
          setCocktail(newCocktail)
          // setCocktail((cocktail) => {console.log(cocktail); return cocktail}) 
        } else{
          setCocktail(null)
        }
      }catch(error){
        console.log(error);
      }
      setLoading(false)
    }
    getCocktail()

  }, [id])


  if(loading){
    return <Loading />
  }

  if(!cocktail){
    return <h2 className="section-title">no cocktail to display</h2>
  }

  const {category,instructions,name,image,info,glass,ingredients} = cocktail;
  console.log(ingredients)

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">back home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}/>
        <div className="drink-info">
          <p><span className="drink-data">name: </span>{name}</p>
          <p><span className="drink-data">category: </span>{category}</p>
          <p><span className="drink-data">info: </span>{info}</p>
          <p><span className="drink-data">glass: </span>{glass}</p>
          <p><span className="drink-data">instructions: </span>{instructions}</p>
          <p><span className="drink-data">ingredients: </span>{ingredients.map((ingredient, index) => {
            return ingredient?<span key={index}>{ingredient},</span>:null
          })}</p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
