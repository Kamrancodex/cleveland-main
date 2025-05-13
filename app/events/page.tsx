import { Playfair_Display } from "next/font/google"
import Image from "next/image"
import { FeaturedEvents } from "@/components/featured-events"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function EventsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Cleveland event"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6`}>Events Calendar</h1>
          <p className="text-xl max-w-2xl">Discover what's happening in Cleveland this week and beyond.</p>
        </div>
      </section>

      {/* Events This Week */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-12`}>Events This Week</h2>
          <FeaturedEvents />
        </div>
      </section>

      {/* Submit Event CTA */}
      <section className="py-16 px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${playfair.className} text-3xl font-bold mb-4 text-black`}>Have an Event to Share?</h2>
          <p className="mb-8 text-black max-w-2xl mx-auto">
            Submit your event to be featured on Cleveland Vibes. We're always looking for the best happenings around the
            city.
          </p>
          <Link href="/submit">
            <Button className="bg-black text-white hover:bg-gray-800">Submit an Event</Button>
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-12`}>Coming Soon</h2>
          <FeaturedEvents />
        </div>
      </section>
    </main>
  )
}
