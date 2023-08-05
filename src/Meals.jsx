import axios from "axios"
import { useEffect, useState } from "react";
import Card from "./Card";


const Meals = () => {

    const [meals,setMeals]= useState([]);

    const getMeals = async () => {
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    setMeals(data.meals)
    }
    useEffect(()=>{
        getMeals()
    },[])

  return (
    <>
    <div className="flex flex-wrap gap-3">
    {meals?.map((i)=>
    <Card  key={i.idMeal} meal={i}/>
    )}
    </div>
    </>
  )
}

export default Meals