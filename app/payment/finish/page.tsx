import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import Image from "next/image"

export default function FinishPayment() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="stream-logo text-xl text-primary">STREAM</div>
        </header>

        <div className="max-w-md mx-auto text-center">
          <Card className="bg-gray-900 border-gray-800 overflow-hidden">
            <div className="h-40 relative">
              <Image
                src="/placeholder.svg?height=160&width=400"
                alt="Payment success"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-xl font-bold mb-2">Payment Finish</h1>
              <p className="text-gray-400 text-sm mb-6">
                Your payment has been successfully processed. You now have access to all premium content.
              </p>
              <Link href="/dashboard">
                <Button className="w-full">Start Watching</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
