import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useDispatch, useSelector } from 'react-redux'
import { addToGrocery, removeFromGrocery } from '@/redux/Slices/grocerySlice'
import { useNavigate } from 'react-router-dom'

interface RootState {
  groceryReducer:{
    groceryItems:[],
    totalPrice:number
  }
}

interface itemDataType {
  id:number,
  image:string,
  name:string,
  price:number,
  unit:string,
  category:string,
  count?:number
}

export function GroceryCartComponent() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { groceryItems, totalPrice } = useSelector((state:RootState)=>state.groceryReducer)

  const handleAddToGrocery = (item:itemDataType) => {
    dispatch(addToGrocery(item));
  };

  const handleRemoveFromGrocery = (item:itemDataType) => {
    dispatch(removeFromGrocery(item));
  };

  return (
    <div className="container p-3 bg-rd">
      <Card className=" w-full bg-back-400 h-[87vh]">
        <CardHeader className=''>
          <CardTitle className="text-2xl font-bold flex items-center">
            <ShoppingCart className="mr-2" />
            Your Grocery Cart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[370px] pr-4">
            {groceryItems.map((item:itemDataType) => (
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
          <Button
          onClick={()=>navigate("/delivery-info")}
          className="w-full sm:w-auto" size="lg">
            Proceed to Payment
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}