import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PackagePayment() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="stream-logo text-xl text-primary">STREAM</div>
        </header>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8 text-center">Select Your Subscription</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Basic Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$9.99</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">HD streaming</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Watch on 1 device</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Cancel anytime</span>
                  </li>
                </ul>
                <Link href="/payment/finish">
                  <Button className="w-full">Select Plan</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs py-1 px-3 rounded-bl-lg">
                Popular
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Premium Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$14.99</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">4K Ultra HD streaming</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Watch on 4 devices</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Download for offline viewing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Cancel anytime</span>
                  </li>
                </ul>
                <Link href="/payment/finish">
                  <Button className="w-full" variant="default">
                    Select Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
