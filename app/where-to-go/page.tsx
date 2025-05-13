import Image from "next/image"
import Link from "next/link"
import { Playfair_Display } from "next/font/google"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const categories = [
  {
    id: "food-drink",
    title: "Food & Drink",
    description: "The best restaurants, bars, and cafes in Cleveland",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 24,
  },
  {
    id: "outdoors",
    title: "Outdoors & Nature",
    description: "Parks, trails, and natural wonders around the city",
    image:
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 18,
  },
  {
    id: "art-culture",
    title: "Art & Culture",
    description: "Museums, galleries, theaters, and cultural hotspots",
    image:
      "https://images.unsplash.com/photo-1551614868-7d3b35eed775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 15,
  },
  {
    id: "date-night",
    title: "Date Night Ideas",
    description: "Romantic spots and activities for couples",
    image:
      "https://images.unsplash.com/photo-1596813362035-3edcff0c2487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 12,
  },
  {
    id: "seasonal",
    title: "Seasonal Picks",
    description: "The best things to do based on the time of year",
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 9,
  },
  {
    id: "hidden-gems",
    title: "Hidden Gems",
    description: "Lesser-known spots that locals love",
    image:
      "https://images.unsplash.com/photo-1518992094393-7b9dead76173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 14,
  },
]

const featuredPlaces = [
  {
    id: 1,
    title: "West Side Market",
    category: "Food & Drink",
    neighborhood: "Ohio City",
    image:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isVibesApproved: true,
    slug: "west-side-market",
  },
  {
    id: 2,
    title: "Edgewater Park",
    category: "Outdoors & Nature",
    neighborhood: "Detroit Shoreway",
    image:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isVibesApproved: true,
    slug: "edgewater-park",
  },
  {
    id: 3,
    title: "Cleveland Museum of Art",
    category: "Art & Culture",
    neighborhood: "University Circle",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isVibesApproved: false,
    slug: "cleveland-museum-of-art",
  },
  {
    id: 4,
    title: "Great Lakes Brewing Company",
    category: "Food & Drink",
    neighborhood: "Ohio City",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    isVibesApproved: true,
    slug: "great-lakes-brewing",
  },
]

export default function WhereToGoPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Cleveland cityscape"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6`}>Where To Go</h1>
          <p className="text-xl max-w-2xl">
            Discover the best spots in Cleveland, from hidden gems to local favorites.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-12 text-center`}>Explore By Category</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link href={`/where-to-go/${category.id}`} key={category.id} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-medium flex items-center">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg group-hover:text-yellow-500 transition-colors">
                        {category.title}
                      </h3>
                      <Badge variant="outline">{category.count}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-12 text-center`}>Featured Places</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlaces.map((place) => (
              <Link href={`/places/${place.slug}`} key={place.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image src={place.image || "/placeholder.svg"} alt={place.title} fill className="object-cover" />
                    {place.isVibesApproved && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-yellow-500">Vibes Approved</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-500 transition-colors">
                      {place.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Badge variant="outline" className="mr-2">
                        {place.category}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{place.neighborhood}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
