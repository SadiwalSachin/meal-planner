import  { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setAllRecipe, setSelectedRecipe } from "@/redux/Slices/recipeSlice";
import { useNavigate } from "react-router-dom";

interface recipeDataType {
  cookingTime:number,
  id:number,
  image:string,
  ingredients:[],
  instructions:[],
  name:string,
  nutrition:{
    calories:number,
    carbs:number,
    protien:number
  },
  title:string
}

interface selectedRecipeDataType{
  id:number
}

interface RootState {
  recipeReducer: {
    allRecipe: [];
    selectedRecipe:selectedRecipeDataType
  };
}

export function RecipeComponent() {
 
  const dispatch = useDispatch();

  const allrecipe = useSelector((state:RootState) => state.recipeReducer.allRecipe);
  let selectedRecipe = useSelector((state:RootState)=> state.recipeReducer.selectedRecipe)

  useEffect(() => {
      const fetchAllRecipe = async () => {
        const response = await axios.get(
          "http://localhost:8080/api/v1/recipe/get-all-recipe"
        );
        console.log(response.data.data);
        // setAllRecipe(response.data.data)
        dispatch(setAllRecipe(response.data.data))
        console.log(allrecipe);
      };

      fetchAllRecipe();
  },[]);

  console.log(selectedRecipe);
  const navigate = useNavigate()
  const handleSelectRecipeAndNavigation = (recipe:recipeDataType) => {
    dispatch(setSelectedRecipe(recipe))
    navigate(`/recipes/:${recipe.id}`)
  }

  const [searchTerm, setSearchTerm] = useState<string>("");


  return (
    <main className="container mx-auto px-4 py-8 overflow-y-scroll bg-back-400">
      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* Left side: Search, filter, and recipe cards */}
        <div className="w-full">
          <div className="mb-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search recipes..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Meal Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                  <SelectItem value="snack">Snack</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Cuisine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="mexican">Mexican</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
          <ScrollArea className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {allrecipe?.map((recipe:recipeDataType,index:number) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-colors ${
                    selectedRecipe?.id === recipe.id ? "border-primary" : ""
                  }`}
                  onClick={() =>handleSelectRecipeAndNavigation(recipe) }
                >
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <img
                      src={recipe.image}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <CardTitle className="text-lg">{recipe.name}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {recipe.title}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
