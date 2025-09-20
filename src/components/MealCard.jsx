export default function MealCard({ meal, onClick }) {
  return (
    <div
      className="bg-white shadow rounded p-3 cursor-pointer hover:scale-105 transition"
      onClick={onClick}
    >
      <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded mb-2" />
      <h2 className="font-semibold text-center">{meal.strMeal}</h2>
    </div>
  );
}
