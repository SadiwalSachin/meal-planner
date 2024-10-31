import React, { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useDispatch, useSelector } from 'react-redux'
import { addToGrocery, removeFromGrocery } from '@/redux/Slices/grocerySlice'

interface GroceryItem {
  id: number
  name: string
  price: number
  quantity: number
}

// const initialGroceryItems: GroceryItem[] = [
//   { id: 1, name: "Organic Bananas", price: 0.99, quantity: 2 },
//   { id: 2, name: "Whole Milk", price: 3.49, quantity: 1 },
//   { id: 3, name: "Whole Wheat Bread", price: 2.99, quantity: 1 },
//   { id: 4, name: "Chicken Breast", price: 5.99, quantity: 2 },
//   { id: 5, name: "Spinach", price: 2.49, quantity: 1 },
//   { id: 6, name: "Eggs", price: 3.99, quantity: 1 },
//   { id: 7, name: "Tomatoes", price: 1.99, quantity: 3 },
//   { id: 8, name: "Greek Yogurt", price: 4.49, quantity: 1 },
// ]

export function GroceryCartComponent() {
  // const [groceryItems, setGroceryItems] = useState<GroceryItem[]>(initialGroceryItems)

  // const handleQuantityChange = (id: number, change: number) => {
  //   setGroceryItems(prevItems =>
  //     prevItems.map(item =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(0, item.quantity + change) }
  //         : item
  //     ).filter(item => item.quantity > 0)
  //   )
  // }

  // const totalCost = groceryItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const dispatch = useDispatch()
  const { groceryItems, totalPrice } = useSelector((state)=>state.groceryReducer)

  const handleAddToGrocery = (item) => {
    dispatch(addToGrocery(item));
  };

  const handleRemoveFromGrocery = (item) => {
    dispatch(removeFromGrocery(item));
  };

  return (
    <div className="container p-3">
      <Card className=" w-full  ">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <ShoppingCart className="mr-2" />
            Your Grocery Cart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            {groceryItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">${item.price.toFixed(2)} each</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemoveFromGrocery(item)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.count}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleAddToGrocery(item)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <Separator className="my-4" />
        <CardFooter className="flex flex-col items-end space-y-4">
          <div className="text-xl font-bold">
            Total Price : {totalPrice}
          </div>
          <Button className="w-full sm:w-auto" size="lg">
            Proceed to Payment
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}