"use client"
import { useEffect, useState } from "react";

async function getMealByIngredient(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return [];
    }
}

export default function MealIdea({ mealIngredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMealIdeas() {
            setMeals(await getMealByIngredient(mealIngredient));
        }
        loadMealIdeas();
    }, [mealIngredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>
            <p>Here are some meal ideas using {mealIngredient}:</p>
            <div>
                {meals.map((food) => (
                    <p key={food.idMeal}>{food.strMeal}</p>
                ))}
            </div>
        </div>
    );
}
