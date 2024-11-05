import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  Calendar,
  Home,
  List,
  Menu,
  Settings,
  User,
  Utensils,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSelector } from "react-redux";

interface RootState {
  groceryReducer:{
    groceryItems:[]
  }
}

const Navbar = () => {
  const navigate = useNavigate()
  const {groceryItems} = useSelector((state:RootState)=>state.groceryReducer)

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4  bg-navie-400 ">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Meal Planner</SheetTitle>
                <SheetDescription>Navigation menu</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <Home className="w-5 h-5 mr-3" />
                  Dashboard
                </Link>
                <Link
                  to="plan-meal"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Plan Meal
                </Link>
                <Link
                  to="/recipes"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <Utensils className="w-5 h-5 mr-3" />
                  Recipes
                </Link>
                <Link
                  to="/grocery"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <List className="w-5 h-5 mr-3" />
                  Purchase Grocery
                </Link>
                <Link
                  to="/grocery-list"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Grocery List
                </Link>
                <Link
                  to="/edit-profile"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h1 className="ml-4 text-xl font-semibold text-white">
            Dashboard
          </h1>
        </div>
        <div className="flex items-center">
          <Button
          onClick={()=>navigate("/grocery-list")}
          variant="ghost" size="icon" className="mr-2 relative text-white">
            {groceryItems.length>0 ? <div className="h-2 w-2 absolute top-0 bg-red-400 rounded-2xl"></div> : "" }
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="@johndoe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link
              to={"/profile"}
              >
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              </Link>
              <Link 
              to={"/edit-profile"}
              >
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
};

export default Navbar;
