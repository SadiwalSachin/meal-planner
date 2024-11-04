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
import { SignIn } from "./components/sign-in";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path={"/"} element={<HomePageComponent />}>
          <Route path="/" element={<Header />} />
          <Route path="/plan-meal" element={<ProtectedRoute component={<PlanMeal />} />} />
          <Route path="/recipes" element={<ProtectedRoute component={<RecipeComponent />} />}/>
          <Route path="/recipes/:id" element={<ProtectedRoute component={<SelectedRecipe />} />} />
          <Route path="/grocery"  element={<ProtectedRoute component={<GrocerySearchComponent />} />} />
          <Route path="/grocery-list"  element={<ProtectedRoute component={<GroceryCartComponent />} />} />
        </Route>
        <Route  path="/delivery-info"  element={<ProtectedRoute component={<UserInfoPage />} />}/>
        <Route path={"/profile"}  element={<ProtectedRoute component={<ProfilePageComponent />} />} />
        <Route path="/edit-profile"  element={<ProtectedRoute component={<EditProfile />} />}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </>
  );
}

export default App;
