import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch } from 'react-redux'
import { setUserDetails,setIsLoggedIn,setToken } from '@/redux/Slices/userSlice'

export function SignIn() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      console.log(formData);
      
      const response = await axios.post('http://localhost:8080/api/v1/sign-in', formData)
      console.log('Sign-in successful:', response.data)
      if(response.data.success){
        toast({
          title: "Sign-in Successful",
          description: "Welcome back!",
        })

        dispatch(setUserDetails(response.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setToken(response.data.token))

        localStorage.setItem("token",response.data.token)
        setIsLoading(false)
        navigate("/")

      }

      // Here you would typically store the user's token and redirect to a dashboard or home page
    } catch (error) {
      console.error('Sign-in error:', error)
      toast({
        title: "Sign-in Failed",
        description: "Please check your email and password and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <Link 
      to="/"
      >
        back to dashboard
      </Link>
      <div className="mb-6 flex items-center w-full justify-center">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
      </div>
      <Card className="mx-auto max-w-md">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            <div className="text-center text-sm">
              Don't have an account?{' '}
              <Link to="/sign-up" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}