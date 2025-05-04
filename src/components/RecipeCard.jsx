function RecipeCard({ recipe, onClick }) {
    return (
      <div
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
        onClick={onClick}
      >
        <img
          src={recipe.photo_url_large}
          alt={recipe.name}
          className="w-full h-52 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
          <p className="text-sm text-gray-500">{recipe.cuisine}</p>
        </div>
      </div>
    );
  }
  
  export default RecipeCard;
  