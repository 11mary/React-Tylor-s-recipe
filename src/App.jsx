import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MealCard from "./components/MealCard";
import MealModal from "./components/MealModal";

export default function App() {
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const searchMeals = async () => {
    setError("");
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      if (data.meals) setMeals(data.meals);
      else setError("No meals found for that ingredient.");
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  const getMealDetails = async (id) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      if (data.meals) setSelectedMeal(data.meals[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-4">🍳 Taylor's Recipe Helper</h1>

      <SearchBar
        ingredient={ingredient}
        setIngredient={setIngredient}
        searchMeals={searchMeals}
      />

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
            onClick={() => getMealDetails(meal.idMeal)}
          />
        ))}
      </div>

      {selectedMeal && (
        <MealModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </div>
  );
}
