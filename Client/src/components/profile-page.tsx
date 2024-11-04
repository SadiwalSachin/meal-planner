// import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { Calendar, Heart, List, Mail, MapPin, Phone, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSelector } from "react-redux";

export function ProfilePageComponent() {

  const {userDetails} = useSelector((state)=>state.userReducer)
  console.log(userDetails);
  
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 lg:py-8 py-3  relative">
      <button className="text-2xl" 
      onClick={()=>navigate(-1)}
      ><IoArrowBackSharp/></button>
      <div className="flex flex-col lg:flex-row gap-8 mt-3">
        {/* Left side: User's meals, favorite recipes, and shopping list */}
        <div className="w-full lg:w-2/3">
          <Tabs defaultValue="meals" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="meals">Meals</TabsTrigger>
              <TabsTrigger value="recipes">Favorite Recipes</TabsTrigger>
              <TabsTrigger value="shopping">Shopping List</TabsTrigger>
            </TabsList>
            <TabsContent value="meals">
              <Card>
                <CardHeader>
                  <CardTitle>Your Meal Plan</CardTitle>
                  <CardDescription>
                    Your upcoming meals for the week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => (
                      <div
                        key={day}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-4">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">{day}</span>
                        </div>
                        <span>Grilled Chicken Salad</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recipes">
              <Card>
                <CardHeader>
                  <CardTitle>Favorite Recipes</CardTitle>
                  <CardDescription>Your saved recipes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Spaghetti Carbonara",
                      "Chicken Tikka Masala",
                      "Vegetable Stir Fry",
                      "Beef Tacos",
                      "Greek Salad",
                      "Mushroom Risotto",
                    ].map((recipe) => (
                      <Card key={recipe}>
                        <CardContent className="p-4">
                          <div className="aspect-square relative mb-2">
                            <img
                              src={`/placeholder.svg?height=200&width=200`}
                              alt={recipe}
                              className="rounded-md object-cover"
                              width={200}
                              height={200}
                            />
                          </div>
                          <h3 className="font-medium">{recipe}</h3>
                          <div className="flex items-center mt-2">
                            <Heart className="h-4 w-4 text-red-500 mr-1" />
                            <span className="text-sm text-muted-foreground">
                              Favorite
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shopping">
              <Card>
                <CardHeader>
                  <CardTitle>Shopping List</CardTitle>
                  <CardDescription>Items you need to buy</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Chicken breast (500g)",
                      "Mixed salad greens",
                      "Bell peppers",
                      "Brown rice",
                      "Salmon fillet (400g)",
                      "Olive oil",
                      "Garlic",
                      "Onions",
                      "Tomatoes",
                      "Pasta",
                    ].map((item) => (
                      <li key={item} className="flex items-center">
                        <List className="h-5 w-5 text-muted-foreground mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right side: User's information */}
        <div className="w-full lg:w-1/3">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="@johndoe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{userDetails.user.username}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  {/* <User className="h-5 w-5 text-muted-foreground mr-2" /> */}
                  <span>{userDetails.user.gender}, {userDetails.user.age} years old</span>
                </div>
                <div className="flex items-center">
                  {/* <Mail className="h-5 w-5 text-muted-foreground mr-2" /> */}
                  <span>{userDetails.user.email}</span>
                </div>
                <div className="flex items-center gap-4">
                    <span>Weight - {userDetails.user.weight}</span>
                    <span>Height - {userDetails.user.height}</span>
                </div>
                <div className="flex items-center">
                  <h2 className="font-semibold">Health goal - {userDetails.user.healthGoals}</h2>
                </div>
                <div className="flex items-center">
                  <h2 className="font-semibold">Activity level- {userDetails.user.activityLevel}</h2>
                </div>
                <div className="flex items-center">
                <h2 className="font-semibold">Dietary Preferences - {userDetails.user.dietaryPreferences}</h2>
              </div>
              <div className="flex items-center">
                <h2 className="font-semibold">Preferred MealTypes - {userDetails.user.preferredMealTypes}</h2>
              </div>
              <div className="flex items-center">
                <h2 className="font-semibold">Allergies - {userDetails.user.allergies}</h2>
              </div>
              <div className="flex items-center">
                <h2 className="font-semibold">Avoid Ingredients - {userDetails.user.avoidIngredients}</h2>
              </div>
              <div className="flex items-center">
                <h2 className="font-semibold">Target Calories - {userDetails.user.targetCalories}</h2>
              </div>
              </div>
              <div className="mt-6">
                <Button
                onClick={()=>navigate("/edit-profile")}
                className="w-full">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
