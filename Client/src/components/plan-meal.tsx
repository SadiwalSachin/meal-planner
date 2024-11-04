import React, { useEffect, useState } from "react";
import axios from "axios"
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Search, Filter} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import { addToMeal } from "@/redux/Slices/mealSlice";

interface MealCardProps {
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  imageUrl: string;
  mealType:string,
  id:number
}

function MealCard({
  name,
  description,
  calories,
  protein,
  carbs,
  fat,
  imageUrl,
  mealType,
  id
}: MealCardProps) {

  const dispatch = useDispatch()

  return (
    <Card className="w-full">
      <CardHeader>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
            <span className="text-sm font-medium">Meal Type</span>
            <span className="text-2xl font-bold">{mealType}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Calories</span>
            <span className="text-2xl font-bold">{calories}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Protein</span>
            <span className="text-2xl font-bold">{protein}g</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Carbs</span>
            <span className="text-2xl font-bold">{carbs}g</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Fat</span>
            <span className="text-2xl font-bold">{fat}g</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
        onClick={()=>dispatch(addToMeal({name,calories,protein,carbs,fat,mealType,id}))}
        className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add to Meal Plan
        </Button>
      </CardFooter>
    </Card>
  );
}

export function PlanMeal() {

  const [allMeals,setAllMeals] = useState()
  useEffect(()=>{
    console.log("useeffect chala")
    const fetchMeals = async ()=>{
      console.log("fetch meal function cahala");
      const response = await axios.get("http://localhost:8080/api/v1/meal/get-all-meals")
      console.log("response come from meals :-",response.data.data);
      setAllMeals(response.data.data)
      setFilteredMeals(response.data.data)
    }
    fetchMeals()
  },[])

  const [filteredMeals, setFilteredMeals] = useState();
  const [mealTypeFilter, setMealTypeFilter] = useState("");
  const [dietaryPreferenceFilter, setDietaryPreferenceFilter] = useState("");

  const filterMeals = () => {
    const filtered = allMeals.filter(meal => {
      const matchesMealType = mealTypeFilter ? meal.mealType === mealTypeFilter : true;
      const matchesDietaryPreference = dietaryPreferenceFilter
        ? meal.dietaryPreferences.includes(dietaryPreferenceFilter)
        : true;
      return matchesMealType && matchesDietaryPreference;
    });
    setFilteredMeals(filtered);
  };

  const handleMealTypeChange = (value) => {
    console.log(value);
    setMealTypeFilter(value);
    filterMeals();
  };

  const handleDietaryPreferenceChange = (value) => {
    console.log(value);
    setDietaryPreferenceFilter(value);
    filterMeals();
  };


  return (
    <div className="flex h-screen overflow-hidden bg-back-400">
      <div className="flex flex-1 flex-col overflow-hidden ">
        <main className="flex-1 overflow-y-auto py-6">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">This Week's Meal Plan</h2>
            </div>
            <div className="mb-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search meals..."
                className="pl-10 bg-gray-200"
              />
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-y-1 md:gap-y-0 md:gap-4">
              <Select onValueChange={handleMealTypeChange}>
                <SelectTrigger
                className="w-full bg-gray-200">
                  <SelectValue placeholder="Meal Type" />
                </SelectTrigger >
                <SelectContent >
                  <SelectItem value="Breakfast">Breakfast</SelectItem>
                  <SelectItem value="Lunch">Lunch</SelectItem>
                  <SelectItem value="Dinner">Dinner</SelectItem>
                  <SelectItem value="Snack">Snack</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={handleDietaryPreferenceChange}>
                <SelectTrigger className="w-full bg-gray-200">
                  <SelectValue placeholder="Dietary Restrictions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Vegan">Vegan</SelectItem>
                  <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="Dairy-Free">Dairy-Free</SelectItem>
                  <SelectItem value="Keto">Keto</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full bg-gray-200">
                  <SelectValue placeholder="Cuisine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="mexican">Mexican</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full bg-gray-200">
                According Users Prefrences
              </Button>
            </div>
          </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredMeals?.map((mealData,index)=>(
                <MealCard
                id={index}
                name={mealData.name}
                description={mealData.details}
                calories={mealData.calories}
                protein={mealData.protein}
                carbs={mealData.carbs}
                fat={mealData.fats}
                imageUrl={mealData.image}
                mealType={mealData.mealType}
              />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
