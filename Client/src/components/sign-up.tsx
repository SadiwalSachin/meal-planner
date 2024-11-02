// import React from 'react'
// import { ArrowLeft } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"

// export function SignUp() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     // Handle form submission here
//     console.log('Sign-up form submitted')
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-6 flex items-center">
//         <Button variant="ghost" className="mr-4 p-0" aria-label="Go back">
//           <ArrowLeft className="h-6 w-6" />
//         </Button>
//         <h1 className="text-2xl font-bold">Sign Up</h1>
//       </div>
//       <Card className="mx-auto max-w-2xl">
//         <form onSubmit={handleSubmit}>
//           <CardHeader>
//             <CardTitle>Create Your Account</CardTitle>
//             <CardDescription>Join our meal planning community and start your journey to better health.</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div className="space-y-2">
//                 <Label htmlFor="username">Username</Label>
//                 <Input id="username" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input id="password" type="password" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="age">Age</Label>
//                 <Input id="age" type="number" min="1" max="120" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="gender">Gender</Label>
//                 <Select required>
//                   <SelectTrigger id="gender">
//                     <SelectValue placeholder="Select gender" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                     <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="weight">Weight (kg)</Label>
//                 <Input id="weight" type="number" min="1" max="500" step="0.1" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="height">Height (cm)</Label>
//                 <Input id="height" type="number" min="1" max="300" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="healthGoal">Health Goal</Label>
//                 <Select required>
//                   <SelectTrigger id="healthGoal">
//                     <SelectValue placeholder="Select goal" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="loseWeight">Lose Weight</SelectItem>
//                     <SelectItem value="gainWeight">Gain Weight</SelectItem>
//                     <SelectItem value="maintainWeight">Maintain Weight</SelectItem>
//                     <SelectItem value="buildMuscle">Build Muscle</SelectItem>
//                     <SelectItem value="improveHealth">Improve Overall Health</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="targetCalories">Target Calories</Label>
//                 <Input id="targetCalories" type="number" min="500" max="10000" step="50" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="activityLevel">Activity Level</Label>
//                 <Select required>
//                   <SelectTrigger id="activityLevel">
//                     <SelectValue placeholder="Select activity level" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="sedentary">Sedentary</SelectItem>
//                     <SelectItem value="lightlyActive">Lightly Active</SelectItem>
//                     <SelectItem value="moderatelyActive">Moderately Active</SelectItem>
//                     <SelectItem value="veryActive">Very Active</SelectItem>
//                     <SelectItem value="extraActive">Extra Active</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="avoidIngredients">Ingredients to Avoid</Label>
//               <Textarea id="avoidIngredients" placeholder="Enter ingredients you want to avoid, separated by commas" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="preferredMealTypes">Preferred Meal Types</Label>
//               <Textarea id="preferredMealTypes" placeholder="Enter your preferred meal types, separated by commas (e.g., breakfast, lunch, dinner, snacks)" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="allergies">Allergies</Label>
//               <Textarea id="allergies" placeholder="Enter any food allergies you have, separated by commas" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="dietaryPreferences">Dietary Preferences</Label>
//               <Textarea id="dietaryPreferences" placeholder="Enter your dietary preferences (e.g., vegetarian, vegan, keto, paleo), separated by commas" />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button type="submit" className="w-full">Create Account</Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   )
// }


import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from 'react-router-dom';

export function SignUp() {

  const navigate = useNavigate()

  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    dietaryPreferences: '',
    allergies: '',
    healthGoals: '',
    targetCalories: '',
    preferredMealTypes: '',
    avoidIngredients: '',
    activityLevel: ''
  });

  // Handle input change
  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(id,value);
    
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle select change for custom components
  const handleSelectChange = (id, value) => {
    console.log(id,value);
    
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/register', formData);
      console.log('User registered successfully:', response.data);
      if(response.data.success){
        navigate("/")
      }

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Sign Up</h1>
      </div>
      <Card className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>Join our meal planning community and start your journey to better health.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" required value={formData.username} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required value={formData.password} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" min="1" max="120" required value={formData.age} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select required value={formData.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" type="number" min="1" max="500" step="0.1" required value={formData.weight} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input id="height" type="number" min="1" max="300" required value={formData.height} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="healthGoals">Health Goal</Label>
                <Select required value={formData.healthGoals} onValueChange={(value) => handleSelectChange('healthGoals', value)}>
                  <SelectTrigger id="healthGoals">
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="loseWeight">Lose Weight</SelectItem>
                    <SelectItem value="gainWeight">Gain Weight</SelectItem>
                    <SelectItem value="maintainWeight">Maintain Weight</SelectItem>
                    <SelectItem value="buildMuscle">Build Muscle</SelectItem>
                    <SelectItem value="improveHealth">Improve Overall Health</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetCalories">Target Calories</Label>
                <Input id="targetCalories" type="number" min="500" max="10000" step="50" required value={formData.targetCalories} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="activityLevel">Activity Level</Label>
                <Select required value={formData.activityLevel} onValueChange={(value) => handleSelectChange('activityLevel', value)}>
                  <SelectTrigger id="activityLevel">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary</SelectItem>
                    <SelectItem value="lightlyActive">Lightly Active</SelectItem>
                    <SelectItem value="moderatelyActive">Moderately Active</SelectItem>
                    <SelectItem value="veryActive">Very Active</SelectItem>
                    <SelectItem value="extraActive">Extra Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="avoidIngredients">Ingredients to Avoid</Label>
              <Textarea id="avoidIngredients" value={formData.avoidIngredients} onChange={handleChange} placeholder="Enter ingredients you want to avoid, separated by commas" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredMealTypes">Preferred Meal Types</Label>
              <Textarea id="preferredMealTypes" value={formData.preferredMealTypes} onChange={handleChange} placeholder="Enter your preferred meal types, separated by commas" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="allergies">Allergies</Label>
              <Textarea id="allergies" value={formData.allergies} onChange={handleChange} placeholder="Enter any food allergies you have, separated by commas" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dietaryPreferences">Dietary Preferences</Label>
              <Textarea id="dietaryPreferences" value={formData.dietaryPreferences} onChange={handleChange} placeholder="Enter your dietary preferences, separated by commas" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Create Account</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
