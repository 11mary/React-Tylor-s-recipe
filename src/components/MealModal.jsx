export default function MealModal({ meal, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-2">{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded mb-4" />
        <p className="mb-2"><strong>Category:</strong> {meal.strCategory}</p>
        <p className="mb-2"><strong>Area:</strong> {meal.strArea}</p>
        <p className="text-sm whitespace-pre-line">{meal.strInstructions}</p>
      </div>
    </div>
  );
}
