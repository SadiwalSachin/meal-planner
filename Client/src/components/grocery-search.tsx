import React, { useState } from 'react'
import { Search, Filter, ShoppingCart, Minus, Plus, } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useDispatch, useSelector } from 'react-redux'
import { addToGrocery, removeFromGrocery } from '@/redux/Slices/grocerySlice'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface GroceryItem {
  id: number
  name: string
  price: number
  unit: string
  category: string
  image: string
}

const groceryItems2: GroceryItem[] = [
  { id: 1, name: "Organic Bananas", price: 0.99, unit: "lb", category: "Fruits", image: "https://i.pinimg.com/564x/22/d2/94/22d294948309673bdd7a957de17eb667.jpg" },
  { id: 2, name: "Whole Milk", price: 3.49, unit: "gallon", category: "Dairy", image: "https://i.pinimg.com/564x/5f/c8/27/5fc827023db43fb3caf2a6e4ffd35395.jpg" },
  { id: 3, name: "Whole Wheat Bread", price: 2.99, unit: "loaf", category: "Bakery", image: "https://i.pinimg.com/564x/91/be/e5/91bee5e58c53bc63169dedd49e5da833.jpg" },
  { id: 4, name: "Chicken Breast", price: 5.99, unit: "lb", category: "Meat", image: "https://i.pinimg.com/564x/44/73/90/447390081444f58a0f59e9045ff227ad.jpg" },
  { id: 5, name: "Spinach", price: 2.49, unit: "bunch", category: "Vegetables", image: "https://i.pinimg.com/564x/81/21/35/8121350a5f1cc108c52e27a10c2503dd.jpg" },
  { id: 6, name: "Eggs", price: 3.99, unit: "dozen", category: "Dairy", image: "https://i.pinimg.com/564x/b1/b0/ca/b1b0ca7aae09ea4e748758a28e447e93.jpg" },
  { id: 7, name: "Tomatoes", price: 1.99, unit: "lb", category: "Vegetables", image: "https://i.pinimg.com/564x/c2/da/d0/c2dad0767e554eb74dc1d7b59b79581f.jpg" },
  { id: 8, name: "Greek Yogurt", price: 4.49, unit: "32oz", category: "Dairy", image: "https://i.pinimg.com/564x/86/3b/02/863b020f8dcc36734df37196767c487c.jpg" },
  { id: 9, name: "Salmon Fillet", price: 9.99, unit: "lb", category: "Seafood", image: "https://i.pinimg.com/736x/c5/af/7b/c5af7b02b9f00f2e2a9f5fa430561dc3.jpg" },
  { id: 10, name: "Avocado", price: 1.49, unit: "each", category: "Fruits", image: "https://i.pinimg.com/564x/0e/6f/ca/0e6fcac36ad9b8943eab5f7b0a7debcb.jpg" },
  { id: 11, name: "Brown Rice", price: 3.29, unit: "2lb bag", category: "Grains", image: "https://i.pinimg.com/564x/10/1d/66/101d6638078cb08fdb0db330a2885427.jpg" },
  { id: 12, name: "Olive Oil", price: 7.99, unit: "16.9oz bottle", category: "Pantry", image: "https://i.pinimg.com/564x/59/70/db/5970db375e343d5d2cd29f2b250ec92d.jpg" },
]

export function GrocerySearchComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  const filteredItems = groceryItems2.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === "" || item.category === categoryFilter)
  )

  const categories = Array.from(new Set(groceryItems2.map(item => item.category)))

  const dispatch = useDispatch()
  const {groceryItems} = useSelector((state)=>state.groceryReducer)
  console.log(groceryItems);
  

  const handleAddToGrocery = (item) => {
    dispatch(addToGrocery(item));
  };

  const handleRemoveFromGrocery = (item)=>{
    dispatch(removeFromGrocery(item))
  }


  return (
    <main className="container mx-auto px-4 py-8 overflow-y-scroll bg-back-400">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Grocery Search</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search grocery items..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select> */}
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="aspect-square relative mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-md object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">per {item.unit}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
            </CardContent>
            <CardFooter>
            <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemoveFromGrocery(item)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  
                  <span className="w-8 text-center">
                    {groceryItems.map((itemData)=>{
                      if(itemData.id == item.id){
                       return itemData.count 
                      }
                    })}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleAddToGrocery(item)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}