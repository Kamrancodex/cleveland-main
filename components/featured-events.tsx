"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    id: 1,
    title: "Cleveland Flea Market",
    date: "May 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Tyler Village",
    image:
      "https://images.unsplash.com/photo-1506719040632-7d586470c936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Market",
    slug: "cleveland-flea-market",
  },
  {
    id: 2,
    title: "Brewery District Pub Crawl",
    date: "May 17, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Ohio City",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Nightlife",
    slug: "brewery-district-pub-crawl",
  },
  {
    id: 3,
    title: "Waterfront Concert Series",
    date: "May 18, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Edgewater Park",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Music",
    slug: "waterfront-concert-series",
  },
  {
    id: 4,
    title: "Food Truck Friday",
    date: "May 19, 2025",
    time: "11:00 AM - 2:00 PM",
    location: "Public Square",
    image:
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Food",
    slug: "food-truck-friday",
  },
]

export function FeaturedEvents() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Music", "Food", "Nightlife", "Market", "Art"]

  const filteredEvents = activeFilter === "All" ? events : events.filter((event) => event.category === activeFilter)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <Badge
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            className={`cursor-pointer ${activeFilter === filter ? "bg-yellow-500" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.map((event) => (
          <Link href={`/events/${event.slug}`} key={event.id} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform group-hover:shadow-lg group-hover:-translate-y-1">
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-yellow-500">{event.category}</Badge>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-500 transition-colors">{event.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
