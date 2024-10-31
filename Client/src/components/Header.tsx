import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSelector } from "react-redux";

const Header = () => {

  const {groceryItems} = useSelector((state)=>state.groceryReducer)

  return (
    <>
      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Meal Plan Calendar</CardTitle>
              <CardDescription>Your upcoming meals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Monday</span>
                  <span>Grilled Chicken Salad</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tuesday</span>
                  <span>Vegetable Stir Fry</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Wednesday</span>
                  <span>Salmon with Roasted Vegetables</span>
                </div>
                {/* Add more days as needed */}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Nutritional Overview</CardTitle>
              <CardDescription>Weekly nutrition summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Calories</span>
                  <span>2100 / day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Protein</span>
                  <span>100g / day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Carbs</span>
                  <span>250g / day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Fat</span>
                  <span>70g / day</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shopping List</CardTitle>
              <CardDescription>Items to buy this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
               {groceryItems.length>0 ? groceryItems.map((data)=>(
                <li>{data.name} - {data.price}$</li>
               )) : "" }
                
                {/* Add more items as needed */}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Header;
