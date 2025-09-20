export default function SearchBar({ ingredient, setIngredient, searchMeals }) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      <input
        className="border p-2 rounded w-64"
        value={ingredient}
        placeholder="Enter ingredient (e.g. chicken)"
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={searchMeals}
      >
        Search
      </button>
    </div>
  );
}
