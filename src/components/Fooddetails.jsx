
import {useState, useEffect} from "react";
import styles from "./Fooddetails.module.css";
import Itemlist from "./Itemlist";


export default function Fooddetails({foodId}){
const[food,setFood]=useState({})
const[isLoading, setIsLoading] = useState(true)
const URL=`https://api.spoonacular.com/recipes/${foodId}/information`
const API_KEY="c98a30923c7b490d995da7462e56fa95"
useEffect(()=>{
async function fetchDetails(){
 const res = await fetch(`${URL}?apiKey=${API_KEY}`); 
 const data = await res.json();
 setFood(data)
 setIsLoading(false)
    }
    fetchDetails()
},[foodId])
   return (
     <div>
   <div className={styles.recipeCard}>
       <h1 className={styles.recipeName}>{food.title}</h1>
       <img src={food.image} alt="" className={styles.recipeImage}/>
       <div className={styles.recipeDetails}>
 <span><strong>⏱️{food.readyInMinutes}Minutes</strong></span>
 <span>🤼<strong>serves{food.servings}</strong></span>
 <span><strong>{food.vegetarian?"🥒 Vegetarian":"🍖 Non-vegetarian"}</strong></span>
 <span><strong>{food.vegan?"🥕 Vegan":""}</strong></span>
        </div>
  <div className={styles.recipeDetails}>
  <span><strong>${(food.pricePerServing/100).toFixed(4)} per serving</strong></span>
  </div>
  <h2>Ingredients</h2>
  <Itemlist food={food} isLoading={isLoading}/>
  <h2>Instructions</h2>
  <div className={styles.recipeInstructions}>
      <ol>
          {isLoading?(<p>Loading---</p>):(food.analyzedInstructions[0].steps.map((step)=><li>{step.step}</li>))}
      </ol>
  </div>
   </div>
    
       </div>
    );
}

