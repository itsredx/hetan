"use client"

import { useState } from "react"
import Image from 'next/image'; // Import Next.js Image component for optimization
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Play } from "lucide-react" // Import Play icon

// Updated data with actual source paths
const mediaItems = [
  { type: "image", src: "/images/member-1.jpg", ratio: "16/9", placeholder: "Photo 1 (960x540)", description: "HETAN workshop session" },
  { type: "image", src: "/images/member-2.jpg", ratio: "16/9", placeholder: "Photo 2 (960x540)", description: "Members at annual conference" },
  { type: "image", src: "/images/member-3.jpg", ratio: "16/9", placeholder: "Photo 3 (960x540)", description: "Teaching demonstration" },
  { type: "image", src: "/images/member-4.jpg", ratio: "4/3", placeholder: "Photo 4 (1080x808)", description: "Community outreach program" },
  { type: "image", src: "/images/member-5.jpg", ratio: "2/1", placeholder: "Photo 5 (569x272)", description: "Executive committee meeting" },
  { type: "image", src: "/images/member-6.jpg", ratio: "5/3", placeholder: "Photo 6 (569x343)", description: "School visitation" },
  { type: "image", src: "/images/member-7.jpg", ratio: "5/3", placeholder: "Photo 7 (590x350)", description: "Student exhibition" },
  { type: "image", src: "/images/member-8.jpg", ratio: "1/1", placeholder: "Photo 8 (540x502)", description: "Resource development session" },
  { type: "image", src: "/images/member-9.jpg", ratio: "9/16", placeholder: "Photo 9 (540x960)", description: "Practical teaching session" },
  { type: "image", src: "/images/member-10.jpg", ratio: "9/16", placeholder: "Photo 10 (540x960)", description: "Skills acquisition workshop" },
  { type: "image", src: "/images/member-11.jpg", ratio: "9/16", placeholder: "Photo 11 (540x960)", description: "Teacher training program" },
  { type: "image", src: "/images/member-12.jpg", ratio: "9/16", placeholder: "Photo 12 (540x960)", description: "Curriculum development meeting" },
  { type: "video", src: "/videos/member-video.mp4", ratio: "9/16", placeholder: "Video 1 (540x960)", description: "Teaching methodology demonstration" },
]

// Helper type for media items
type MediaItem = typeof mediaItems[0];

export default function MemberShowcase() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleItemClick = (item: MediaItem) => {
    setSelectedItem(item)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    // Delay clearing selectedItem slightly to avoid flicker during closing animation
    setTimeout(() => setSelectedItem(null), 300);
  }

  // Function to determine the appropriate column span based on the aspect ratio
  const getColumnSpan = (ratio: string) => {
    switch (ratio) {
      case "16/9":
      case "2/1":
      case "5/3":
        return "col-span-1 sm:col-span-2"
      case "4/3":
        return "col-span-1 sm:col-span-2 md:col-span-2"
      case "1/1":
        return "col-span-1"
      case "9/16":
        return "col-span-1"
      default:
        return "col-span-1"
    }
  }

  // Function to determine the appropriate row span based on the aspect ratio
  const getRowSpan = (ratio: string) => {
    switch (ratio) {
      case "9/16":
        return "row-span-2"
      default:
        return "row-span-1"
    }
  }

  return (
    <div className="space-y-8">
      <p className="text-center text-muted-foreground max-w-3xl mx-auto">
        Explore our gallery of images and videos showcasing HETAN Kano Chapter members' activities, events, and
        contributions to Home Economics education.
      </p>

      {/* Grid for media items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] sm:auto-rows-[200px] md:auto-rows-[180px] lg:auto-rows-[200px]">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`${getColumnSpan(item.ratio)} ${getRowSpan(item.ratio)} bg-muted rounded-lg overflow-hidden shadow-sm h-full cursor-pointer group relative`} // Added group and relative here
            onClick={() => handleItemClick(item)}
            // Apply aspect ratio directly for grid item sizing constraint if needed,
            // though auto-rows and spans should handle it. Let's rely on spans/rows first.
            // style={{ aspectRatio: item.ratio.replace("/", "/") }} // Reconsider if needed
          >
             {/* Media content (Image or Video preview) */}
            <div className="absolute inset-0"> {/* Use absolute positioning to fill parent */}
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.description}
                  fill // Use fill to cover the parent container
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Provide sizes for optimization
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" // object-cover ensures fit, added hover effect
                  priority={index < 8} // Prioritize loading images visible above the fold
                  loading={index < 8 ? undefined : "lazy"} // Lazy load images below the fold
                />
              ) : (
                // For video, show a muted preview or just a static frame/gradient with icon
                <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-amber-100/40">
                   <video // Show first frame, muted, no controls in grid
                    src={item.src}
                    className="object-cover w-full h-full"
                    muted
                    loop // Loop might be nice for short clips
                    playsInline // Important for mobile
                    preload="metadata" // Load just enough to show first frame/duration
                  />
                  {/* Play Icon Overlay for video in grid */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white/80" fill="white"/>
                  </div>
                </div>
              )}
            </div>

            {/* Overlay with description on hover */}
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
              <p className="font-semibold">{item.description}</p>
              <div className="mt-3 text-sm border border-white/70 px-3 py-1 rounded-full">
                {item.type === "video" ? "Play Video" : "View Image"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog for displaying selected item */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-background/95 backdrop-blur-sm">
          {/* Custom Close Button */}
           <button
            onClick={handleClose}
            className="absolute right-3 top-3 z-50 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {selectedItem && (
            <div className="p-1 md:p-2">
              {/* Media display area */}
              <div
                className="w-full rounded-lg overflow-hidden bg-black flex items-center justify-center mb-4"
                 // Apply aspect ratio to the container for consistent sizing
                style={{ aspectRatio: selectedItem.ratio.replace("/", "/") }}
              >
                {selectedItem.type === "image" ? (
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.description}
                      width={1200} // Provide a reasonable max width estimate
                      height={1200 / (parseFloat(selectedItem.ratio.split('/')[0]) / parseFloat(selectedItem.ratio.split('/')[1]))} // Calculate height based on ratio
                      className="object-contain max-w-full max-h-[calc(85vh-100px)] w-auto h-auto" // object-contain to show full image, constrained by viewport height minus padding/text
                      quality={90} // Higher quality for dialog view
                   />

                ) : (
                  <video
                    src={selectedItem.src}
                    className="w-full h-full max-h-[calc(85vh-100px)]" // Ensure video fits and respects aspect ratio container
                    controls // Show video controls
                    autoPlay // Autoplay when opened
                    preload="auto"
                  />
                )}
              </div>
              {/* Description area */}
              <div className="px-4 pb-4">
                <h3 className="text-xl font-semibold text-primary">{selectedItem.description}</h3>
                <p className="text-muted-foreground mt-2">
                  {selectedItem.type === "video"
                    ? "Video showcasing HETAN Kano Chapter activities."
                    : "Image capturing a moment from HETAN Kano Chapter activities."}
                  {/* You could add more details here if needed */}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}