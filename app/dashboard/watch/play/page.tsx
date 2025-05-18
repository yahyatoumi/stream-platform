import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Pause, Volume2, Maximize2, Settings } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function PlayMovie() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="relative flex-1 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40"></div>

        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/placeholder.svg?height=720&width=1280')" }}
        >
          {/* Video player controls overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
              <Link href="/dashboard/watch">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-bold">Movie Title</h1>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-center mb-8">
                <Button variant="ghost" size="icon" className="h-16 w-16 rounded-full bg-black/30">
                  <Pause className="h-8 w-8" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm">1:15:30</span>
                  <Slider defaultValue={[75]} max={100} step={1} className="flex-1" />
                  <span className="text-sm">2:15:00</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                      <Volume2 className="h-5 w-5" />
                    </Button>
                    <Slider defaultValue={[80]} max={100} step={1} className="w-24" />
                  </div>

                  <Button variant="ghost" size="icon">
                    <Maximize2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
