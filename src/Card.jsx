import React from "react";
import { Link } from "react-router-dom";

const Card = ({meal}) => {

    // console.log(meal);
  return (
    <div className="card shadow-sm border rounded p-5 hover:scale-90 transition">
        <img src={meal.strMealThumb} alt="" width={250}/>
        <p className="my-3">{meal.strMeal}</p>
        <Link to={`detail/${meal.idMeal}`}>
        <button className="bg-slate-600 px-3 rounded">Detail</button>
        </Link>
    </div>
  )
}

export default Card