import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

interface allMealDataType {
  name:string,
  mealType:string
}

interface RootState {
  mealReducer:{
    allMeal:[],
    mealNeutraints:{
      Calories:number,
      Protein:number,
      Carbs:number,
      Fat:number
    }
  }
  groceryReducer:{
    groceryItems:[]
  }
}

const Header = () => {
  const {allMeal} = useSelector((state:RootState) => state.mealReducer);
  const mealNeutraints = useSelector((state:RootState)=>state.mealReducer.mealNeutraints)
  console.log(mealNeutraints);
  
  console.log(allMeal);

  const { groceryItems } = useSelector((state:RootState) => state.groceryReducer);

  return (
    <>
      <main className="flex-1 overflow-y-auto md:p-6 p-3 bg-back-400 ">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="bg-red-300 h-[83.3vh] rounded-xl">
            <div className="md:p-6 p-2">
              <h1 className="uppercase md:text-4xl font-semibold">
                meal plan calender
              </h1>
            </div>
            <div className="md:px-6 px-2 h-[73%]">
              <Card className="bg-card1-400 h-full">
                <h2 className="uppercase font-bold ml-6 mt-2 text-xl">Today</h2>
                <CardContent className="">
                  <div className="space-y-2 mt-2 ">
                    {allMeal?.map((data:allMealDataType) => (
                      <div className="flex justify-between items-center">
                        <span className="text-xl">
                          Meal - {data.name} - {data.mealType}
                        </span>
                        <button
                        className="text-xl"
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardContent className="">
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="">
            <Card className="bg-card2-400">
              <CardHeader>
                <CardTitle>Nutritional Overview</CardTitle>
                <CardDescription>Weekly nutrition summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 ">
                  <div className="flex justify-between items-center">
                    <span>Calories</span>
                    <span>{mealNeutraints?.Calories ? `${mealNeutraints?.Calories} / day` : "" }</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Protein</span>
                    <span>{mealNeutraints?.Protein ? `${mealNeutraints?.Protein}g / day` : ""}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Carbs</span>
                    <span>{mealNeutraints?.Carbs ? `${mealNeutraints?.Carbs}g / day` : ""}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fat</span>
                    <span> {mealNeutraints.Fat ? `${mealNeutraints?.Fat}g / day` : ""} </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card3-400 mt-3">
              <CardHeader>
                <CardTitle>Shopping List</CardTitle>
                <CardDescription>Items to buy this week</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {groceryItems.length > 0
                    ? groceryItems.map((data:{
                      name:string,
                      price:number
                    }) => (
                        <li>
                          {data.name} - {data.price}$
                        </li>
                      ))
                    : ""}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
