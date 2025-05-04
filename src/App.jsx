import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import VideoModal from "./components/VideoModal";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch("/recipes.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => {
        const recipeList = Array.isArray(data) ? data : data.recipes;
        setRecipes(recipeList);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const videoIdMatch = url.match(/v=([^&]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 p-6">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-lg">
        🧑🏻‍🍳 Delicious Recipe Finder
      </h1>
      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-gray-300 rounded-full px-5 py-3 w-full max-w-xl focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-md transition-all duration-300"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.uuid}
            recipe={recipe}
            onClick={() => setSelectedVideo(getYouTubeEmbedUrl(recipe.youtube_url))}
          />
        ))}
      </div>

      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}

export default App;
