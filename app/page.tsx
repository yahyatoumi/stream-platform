import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="stream-logo text-xl text-primary">STREAM</div>
          <div className="flex gap-4">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="default" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        </header>

        <main className="grid grid-cols-1 gap-8">
          <section className="relative rounded-xl overflow-hidden h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=900"
              alt="Featured movie"
              width={900}
              height={500}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h1 className="text-3xl font-bold mb-2">Enjoy Watching Great Movies</h1>
              <p className="text-gray-300 mb-4 max-w-md">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
              <div className="flex gap-4">
                <Button className="rounded-full">
                  <Play className="mr-2 h-4 w-4" /> Watch Now
                </Button>
                <Button variant="outline" className="rounded-full">
                  Explore More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Popular Movies</h2>
              <Button variant="link" className="text-primary">
                See All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="movie-card">
                  <Image
                    src={`/placeholder.svg?height=240&width=180&text=Movie${i}`}
                    alt={`Movie ${i}`}
                    width={180}
                    height={240}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="gradient-overlay"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <h3 className="font-medium text-sm">Movie Title {i}</h3>
                    <p className="text-xs text-gray-400">2023 • Action</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
