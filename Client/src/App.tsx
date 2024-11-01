import { Route, Routes } from "react-router-dom";
import { HomePageComponent } from "./components/home-page";
import { ProfilePageComponent } from "./components/profile-page";
import { PlanMeal } from "./components/plan-meal";
import Header from "./components/Header";
import { RecipeComponent } from "./components/recipe-component";
import { GrocerySearchComponent } from "./components/grocery-search";
import { EditProfile } from "./components/edit-profile";
import { SignUp } from "./components/sign-up";
import ProtectedRoute from "./components/ProtectedRoute";
import SelectedRecipe from "./components/SelectedRecipe";
import { GroceryCartComponent } from "./components/grocery-cart";
import UserInfoPage from "./hooks/user-info";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePageComponent />}>
          <Route path="/" element={<Header />} />
          <Route path={"/plan-meal"} element={<ProtectedRoute component={<PlanMeal />} />} />
          <Route path="/recipes" element={<RecipeComponent/>}/>
          <Route path="/recipes/:id" element={<SelectedRecipe/>}/>
          <Route path="/grocery" element={<GrocerySearchComponent/>}/>
          <Route path="/grocery-list" element={<GroceryCartComponent/>}/>
        </Route>
        <Route  path="/delivery-info" element={<UserInfoPage/>}/>
        <Route path={"/profile"} element={<ProfilePageComponent />} />
        <Route path="/edit-profile" element={<EditProfile/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
