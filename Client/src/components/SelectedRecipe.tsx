import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoArrowBackSharp } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  description: string;
  prepTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  image: string;
}

const SelectedRecipe = () => {
  const navigate = useNavigate()
  const selectedRecipe = useSelector((state)=>state.recipeReducer.selectedRecipe)
  console.log(selectedRecipe);
  

  return (
    <>
      <div className="w-full p-6 ">
        <Card className="h-[80vh] overflow-y-scroll">
          <button 
          className="text-3xl m-3"
          onClick={()=>navigate(-1)}
          ><IoArrowBackSharp/></button>
          <CardHeader>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-40 h-40 object-center object-cover rounded-lg"
            />
            <CardTitle className="text-2xl mt-4">
              {selectedRecipe.name}
            </CardTitle>
            <CardDescription>
                {selectedRecipe.title}
                </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>
                    {selectedRecipe.cookingTime}
                    </span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Ingredients</h3>
                <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Instructions</h3>
                <ol className="list-decimal list-inside">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Meal</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default SelectedRecipe;
