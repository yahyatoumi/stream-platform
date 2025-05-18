import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Play, Plus, ThumbsUp, Share2, Download } from "lucide-react"
import Image from "next/image"

export default function Watch() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[50vh] md:h-[70vh]">
        <Image
          src="/placeholder.svg?height=700&width=1200"
          alt="Movie cover"
          width={1200}
          height={700}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        <div className="absolute top-6 left-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h1 className="text-3xl font-bold mb-2">Movie Title</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
            <span>2023</span>
            <span>•</span>
            <span>2h 15m</span>
            <span>•</span>
            <span>Action, Adventure</span>
            <span>•</span>
            <span className="bg-gray-700 px-2 py-0.5 rounded">HD</span>
          </div>

          <p className="text-gray-300 max-w-2xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard/watch/play">
              <Button className="gap-2">
                <Play className="h-4 w-4" /> Play
              </Button>
            </Link>
            <Button variant="outline" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">More Like This</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-gray-800 border-0 overflow-hidden movie-card">
              <Image
                src={`/placeholder.svg?height=240&width=180&text=Similar${i}`}
                alt={`Similar Movie ${i}`}
                width={180}
                height={240}
                className="w-full h-auto"
              />
              <div className="gradient-overlay"></div>
              <div className="absolute bottom-0 left-0 p-3">
                <h3 className="font-medium text-sm">Similar Title {i}</h3>
                <p className="text-xs text-gray-400">2023 • Action</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
