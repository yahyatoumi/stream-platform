import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Bell, User, Home, Compass, Bookmark, Settings } from "lucide-react"
import Image from "next/image"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-16 md:w-64 h-screen fixed bg-gray-900 flex flex-col items-center md:items-start p-4">
          <div className="stream-logo text-xl text-primary mb-10 hidden md:block">STREAM</div>
          <div className="stream-logo text-xl text-primary mb-10 md:hidden">S</div>

          <nav className="space-y-6 w-full">
            <Link href="/dashboard" className="flex items-center space-x-3 text-primary">
              <Home className="h-5 w-5" />
              <span className="hidden md:inline">Home</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <Compass className="h-5 w-5" />
              <span className="hidden md:inline">Discover</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <Bookmark className="h-5 w-5" />
              <span className="hidden md:inline">Watchlist</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <Settings className="h-5 w-5" />
              <span className="hidden md:inline">Settings</span>
            </Link>
          </nav>

          <div className="mt-auto">
            <Link href="/dashboard/subscribe" className="hidden md:block">
              <Button className="w-full">Subscribe</Button>
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="ml-16 md:ml-64 flex-1 p-6">
          <header className="flex justify-between items-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for movies, TV shows..."
                className="pl-10 bg-gray-800 border-gray-700 w-full"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-primary rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </header>

          <Tabs defaultValue="movies">
            <TabsList className="bg-gray-800 mb-6">
              <TabsTrigger value="movies">Movies</TabsTrigger>
              <TabsTrigger value="tvshows">TV Shows</TabsTrigger>
              <TabsTrigger value="new">New & Popular</TabsTrigger>
            </TabsList>

            <TabsContent value="movies" className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Watch Today</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Link href="/dashboard/watch" key={i}>
                      <Card className="bg-gray-800 border-0 overflow-hidden movie-card">
                        <Image
                          src={`/placeholder.svg?height=240&width=180&text=Movie${i}`}
                          alt={`Movie ${i}`}
                          width={180}
                          height={240}
                          className="w-full h-auto"
                        />
                        <div className="gradient-overlay"></div>
                        <div className="absolute bottom-0 left-0 p-3">
                          <h3 className="font-medium text-sm">Movie Title {i}</h3>
                          <p className="text-xs text-gray-400">2023 • Action</p>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Trending Now</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[5, 6, 7, 8].map((i) => (
                    <Link href="/dashboard/watch" key={i}>
                      <Card className="bg-gray-800 border-0 overflow-hidden movie-card">
                        <Image
                          src={`/placeholder.svg?height=240&width=180&text=Movie${i}`}
                          alt={`Movie ${i}`}
                          width={180}
                          height={240}
                          className="w-full h-auto"
                        />
                        <div className="gradient-overlay"></div>
                        <div className="absolute bottom-0 left-0 p-3">
                          <h3 className="font-medium text-sm">Movie Title {i}</h3>
                          <p className="text-xs text-gray-400">2023 • Action</p>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="tvshows">
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">TV Shows content will appear here</h3>
              </div>
            </TabsContent>

            <TabsContent value="new">
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">New & Popular content will appear here</h3>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
