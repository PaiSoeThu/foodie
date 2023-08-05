import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Detail = () => {
    const {id} = useParams();
    const [meal,setMeal] = useState({});
    const getSingleMeal = async() =>{
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMeal(data.meals[0]);
        // console.log(data);
    }
    useEffect(()=>{
        getSingleMeal()},[])
  return (
    <div id={meal.idMeal}>
        <img src={meal.strMealThumb} alt="" />
        <p>{meal.strMeal}</p>
        <p>{meal.strInstructions}</p>
    </div>
  )
}

export default Detail