import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function SignUp() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <div className="w-1/2 hidden md:block relative">
        <Image
          src="/placeholder.svg?height=900&width=600"
          alt="Sign up background"
          width={600}
          height={900}
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute top-8 left-8 stream-logo text-xl text-primary">STREAM</div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="md:hidden stream-logo text-xl text-primary mb-8">STREAM</div>
          <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-400 mb-8">Create your account to start streaming</p>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the Terms of Service and Privacy Policy
              </Label>
            </div>
            <Button className="w-full">Create Account</Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
