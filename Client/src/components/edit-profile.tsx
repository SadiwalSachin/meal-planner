import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Camera } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useSelector } from 'react-redux'

export function EditProfile() {

  const {userDetails} = useSelector((state)=>state.userReducer)

  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
    console.log('Profile updated')
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="mb-6 flex items-center">
        <Button 
        onClick={()=>navigate(-1)}
        variant="ghost" className="mr-4 p-0" aria-label="Go back">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold">Edit Profile</h1>
      </div>
      <Card className="mx-auto max-w-2xl bg-orange-200">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="text-center">Your Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="mt-4">
                <Camera className="mr-2 h-4 w-4" />
                Change Picture
              </Button>
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="name">Full Name</Label>
              <Input className='bg-white' id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input className='bg-white'  id="email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input className='bg-white'  id="phone" type="tel" placeholder="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input className='bg-white'  id="dob" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select>
                <SelectTrigger  className='bg-white'  id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea className='bg-white' id="bio" placeholder="Tell us about yourself" />
            </div>
            <div className="space-y-2">
              <Label>Dietary Preferences</Label>
              <div className="flex flex-wrap gap-2">
                {['Vegetarian', 'Vegan', 'Pescatarian', 'Gluten-Free', 'Dairy-Free', 'Keto', 'Paleo'].map((pref) => (
                  <Button key={pref} variant="outline" className="rounded-full">
                    {pref}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-green-700">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}