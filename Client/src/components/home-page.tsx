import SideBar from "./SideBar";
import Navbar from "./Navbar";
// import Header from "./Header";
import { Outlet } from "react-router-dom";

export function HomePageComponent() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <aside className="hidden w-64 bg-white shadow-md lg:block">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-center h-16 border-b bg-lightg-400">
            <h1 className="text-xl font-bold text-gray-800">Meal Planner</h1>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-2 space-y-1">
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md">
                  <Home className="w-5 h-5 mr-3" />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Calendar className="w-5 h-5 mr-3" />
                  Plan Meal
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Utensils className="w-5 h-5 mr-3" />
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <List className="w-5 h-5 mr-3" />
                  Shopping List
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside> */}

      
      <SideBar />


      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">


        {/* Navbar */}
        {/* <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
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
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    <Home className="w-5 h-5 mr-3" />
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    <Calendar className="w-5 h-5 mr-3" />
                    Plan Meal
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    <Utensils className="w-5 h-5 mr-3" />
                    Recipes
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    <List className="w-5 h-5 mr-3" />
                    Shopping List
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    <Settings className="w-5 h-5 mr-3" />
                    Settings
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
            <h1 className="ml-4 text-xl font-semibold text-gray-800">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
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
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header> */}


        <Navbar />

        {/* Main Content Area */}
          <Outlet/>
         {/* <Header/> */}
      </div>
    </div>
  );
}
