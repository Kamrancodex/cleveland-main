"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Instagram } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const reels = [
  {
    id: 1,
    title: "Hidden Speakeasy Tour",
    thumbnail:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    views: "12.5K",
    embedUrl: "https://www.instagram.com/reel/CdGl_0zjCzJ/embed",
  },
  {
    id: 2,
    title: "Best Tacos in Cleveland",
    thumbnail:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    views: "8.7K",
    embedUrl: "https://www.instagram.com/reel/CdGl_0zjCzJ/embed",
  },
  {
    id: 3,
    title: "Lakefront Sunset Spots",
    thumbnail:
      "https://images.unsplash.com/photo-1548515971-a513a3a2f56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    views: "15.2K",
    embedUrl: "https://www.instagram.com/reel/CdGl_0zjCzJ/embed",
  },
  {
    id: 4,
    title: "Cleveland's Best Coffee",
    thumbnail:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    views: "9.3K",
    embedUrl: "https://www.instagram.com/reel/CdGl_0zjCzJ/embed",
  },
]

export function ReelsGallery() {
  const [open, setOpen] = useState(false)
  const [selectedReel, setSelectedReel] = useState<(typeof reels)[0] | null>(null)

  const handleReelClick = (reel: (typeof reels)[0]) => {
    setSelectedReel(reel)
    setOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => handleReelClick(reel)}
          >
            <Image
              src={reel.thumbnail || "/placeholder.svg"}
              alt={reel.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-3">
              <div className="flex items-center">
                <Instagram className="h-4 w-4 text-white mr-1" />
                <span className="text-xs text-white">{reel.views}</span>
              </div>
              <div>
                <div className="flex items-center justify-center absolute inset-0">
                  <div className="bg-white bg-opacity-20 rounded-full p-3">
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </div>
                </div>
                <h3 className="text-white font-medium text-sm">{reel.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-0 h-[80vh] bg-black">
          {selectedReel && (
            <iframe src={selectedReel.embedUrl} className="w-full h-full" frameBorder="0" allowFullScreen></iframe>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
