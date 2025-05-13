import { Playfair_Display } from "next/font/google"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Instagram, Twitter } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const team = [
  {
    id: 1,
    name: "Jessica Miller",
    role: "Founder & Creative Director",
    bio: "Cleveland native with a passion for discovering hidden gems and connecting people to the city's vibrant culture.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instagram: "jessicam",
    twitter: "jessicam",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Content Manager",
    bio: "Foodie, photographer, and storyteller who loves showcasing Cleveland's diverse culinary scene.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instagram: "marcusj",
    twitter: "marcusj",
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Community Manager",
    bio: "Social media expert who builds authentic connections between Cleveland businesses and our audience.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instagram: "sophiac",
    twitter: "sophiac",
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1575338129926-1dd58a5f3ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Cleveland skyline"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6`}>About Us</h1>
          <p className="text-xl max-w-2xl">Meet the team behind Cleveland's hype machine.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-8 text-center`}>Our Story</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Cleveland Vibes started in 2020 as an Instagram account showcasing the best spots in the city. What began
              as a passion project quickly grew into Cleveland's go-to lifestyle platform.
            </p>
            <p>
              We believe that Cleveland is a city worth celebrating—from its world-class cultural institutions to its
              neighborhood dive bars, from lakefront sunsets to hidden street art. Our mission is to spotlight where to
              go, what to eat, who to know, and why it all matters.
            </p>
            <p>
              As locals who love this city on purpose, we're committed to creating content that captures both the
              glitter and the grit of Cleveland. We don't just report the culture—we help shape it.
            </p>
            <p>
              Cleveland Vibes is the flagship brand of ActuallySocial.Media, a creative agency specializing in authentic
              local content.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-12 text-center`}>Meet The Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-yellow-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-2">
                    <Link
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-500"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href={`https://twitter.com/${member.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-500"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${playfair.className} text-3xl font-bold mb-6 text-black`}>Our Mission</h2>
          <p className="text-xl mb-8 text-black">
            "To be Cleveland's hype machine, celebrating the city's culture and connecting people to experiences that
            make them fall in love with the 216 all over again."
          </p>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Want To Work With Us?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            From feature inquiries to content packages, we help brands connect authentically with Cleveland's culture.
          </p>
          <Link href="/work-with-us">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Learn More</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
