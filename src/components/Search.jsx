import {useEffect, useState } from 'react'
import styles from "./search.module.css"
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "c98a30923c7b490d995da7462e56fa95"

export default function Search({foodData,setFoodData}) {
const[query,setQuery]=useState("pizza")
  useEffect(()=>{
   async function getFood(){
       
const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
  const data = await res.json();
  console.log(data.results)
   setFoodData(data.results)
   }
   getFood()
   },
   [query]
   );

  return (
    <div className={styles.searchContainer}>
        <input onChange={(e)=>setQuery(e.target.value)} value={query} className={styles.input} type="text"/>
    </div>
)
}


