import { Playfair_Display } from "next/font/google"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const testimonials = [
  {
    id: 1,
    text: "Working with Cleveland Vibes was the best marketing decision we made this year. Their audience is engaged and they really understand the city.",
    author: "Sarah J., Restaurant Owner",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    text: "The response to our feature was immediate. We saw a 30% increase in foot traffic the weekend after our spotlight went live.",
    author: "Mike T., Brewery Manager",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    text: "Cleveland Vibes helped us reach a younger demographic we were struggling to connect with. Their content is authentic and their audience trusts them.",
    author: "Lisa M., Marketing Director",
    image:
      "https://images.unsplash.com/photo-1551614868-7d3b35eed775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
]

const packages = [
  {
    id: "basic",
    title: "Social Feature",
    price: "$299",
    description: "Perfect for new businesses or special events",
    features: [
      "Instagram Reel + TikTok",
      "Featured in our weekly newsletter",
      "Shared in our Stories",
      "Basic location tag on our map",
    ],
  },
  {
    id: "standard",
    title: "Full Spotlight",
    price: "$599",
    description: "Our most popular package for established businesses",
    features: [
      "Everything in Social Feature",
      "Custom blog post on our website",
      "Professional photography",
      "1 month of featured placement",
      "Vibes Approved badge",
    ],
    isFeatured: true,
  },
  {
    id: "premium",
    title: "Partnership",
    price: "$1,299",
    description: "Long-term collaboration for maximum exposure",
    features: [
      "Everything in Full Spotlight",
      "3 months of content coverage",
      "Event hosting opportunity",
      "Custom campaign strategy",
      "Detailed analytics report",
    ],
  },
]

export default function WorkWithUsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Cleveland business"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6`}>Work With Us</h1>
          <p className="text-xl max-w-2xl">
            Connect with Cleveland's most engaged audience and showcase your business.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-12 text-center`}>
            Why Work With Cleveland Vibes?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Engaged Local Audience</h3>
              <p>
                Our followers are active, local, and passionate about discovering new places in Cleveland. They trust
                our recommendations and take action.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Authentic Content</h3>
              <p>
                We create genuine, high-quality content that resonates with our audience. No generic ads—just real
                experiences that showcase what makes your business special.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Multi-Platform Reach</h3>
              <p>
                From Instagram and TikTok to our website and newsletter, we help you reach Cleveland's most active
                community across multiple touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-12 text-center`}>What Our Partners Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="italic mb-4 text-gray-700">"{testimonial.text}"</p>
                <p className="font-bold text-sm">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-12 text-center`}>Our Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`border rounded-lg overflow-hidden ${pkg.isFeatured ? "border-yellow-500 shadow-lg relative" : "border-gray-200"}`}
              >
                {pkg.isFeatured && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 text-sm">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-bold mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.isFeatured ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-black text-white hover:bg-gray-800"}`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Ready to Collaborate?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help showcase your business to Cleveland's most engaged audience. Fill out our form
            and we'll get back to you within 24 hours.
          </p>
          <Link href="/contact">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Contact Us</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
