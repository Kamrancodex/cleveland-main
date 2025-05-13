import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface CityGuidePreviewProps {
  title: string
  image: string
  category: string
  slug: string
}

export function CityGuidePreview({ title, image, category, slug }: CityGuidePreviewProps) {
  return (
    <Link href={`/guides/${slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute top-2 right-2">
            <Badge className="bg-yellow-500">{category}</Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-500 transition-colors">{title}</h3>
          <p className="text-sm text-gray-600">Unlock this guide by subscribing to our newsletter.</p>
        </div>
      </div>
    </Link>
  )
}
