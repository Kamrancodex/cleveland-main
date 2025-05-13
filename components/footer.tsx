import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Cleveland Vibes"
              width={150}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Cleveland's go-to lifestyle platform. Your hype person for all things 216.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/clevelandvibes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/clevelandvibes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/clevelandvibes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/where-to-go" className="text-gray-400 hover:text-yellow-400">
                  Where To Go
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-yellow-400">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-gray-400 hover:text-yellow-400">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link href="/vibes-approved" className="text-gray-400 hover:text-yellow-400">
                  Vibes Approved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/where-to-go/food-drink" className="text-gray-400 hover:text-yellow-400">
                  Food & Drink
                </Link>
              </li>
              <li>
                <Link href="/where-to-go/outdoors" className="text-gray-400 hover:text-yellow-400">
                  Outdoors & Nature
                </Link>
              </li>
              <li>
                <Link href="/where-to-go/art-culture" className="text-gray-400 hover:text-yellow-400">
                  Art & Culture
                </Link>
              </li>
              <li>
                <Link href="/where-to-go/date-night" className="text-gray-400 hover:text-yellow-400">
                  Date Night Ideas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work-with-us" className="text-gray-400 hover:text-yellow-400">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-gray-400 hover:text-yellow-400">
                  Submit an Event
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Cleveland Vibes. All rights reserved.</p>
          <p className="mt-2">A brand of ActuallySocial.Media</p>
        </div>
      </div>
    </footer>
  )
}
