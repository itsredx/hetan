"use client"

import { useState } from "react"
import Image from "next/image" // Import the Next.js Image component
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

// Updated data with actual image and video paths from the public folder
// Assumes images are in public/images/ and video is in public/videos/
const mediaItems = [
  { type: "image", ratio: "16/9", src: "/images/member-1.jpg", description: "HETAN workshop session" },
  { type: "image", ratio: "16/9", src: "/images/member-2.jpg", description: "Members at annual conference" },
  { type: "image", ratio: "16/9", src: "/images/member-3.jpg", description: "Teaching demonstration" },
  { type: "image", ratio: "4/3", src: "/images/member-4.jpg", description: "Community outreach program" },
  { type: "image", ratio: "2/1", src: "/images/member-5.jpg", description: "Executive committee meeting" },
  { type: "image", ratio: "5/3", src: "/images/member-6.jpg", description: "School visitation" },
  { type: "image", ratio: "5/3", src: "/images/member-7.jpg", description: "Student exhibition" },
  { type: "image", ratio: "1/1", src: "/images/member-8.jpg", description: "Resource development session" },
  { type: "image", ratio: "9/16", src: "/images/member-9.jpg", description: "Practical teaching session" },
  { type: "image", ratio: "9/16", src: "/images/member-10.jpg", description: "Skills acquisition workshop" },
  { type: "image", ratio: "9/16", src: "/images/member-11.jpg", description: "Teacher training program" },
  { type: "image", ratio: "9/16", src: "/images/member-12.jpg", description: "Curriculum development meeting" },
  { type: "video", ratio: "9/16", src: "/videos/member-video.mp4", description: "Teaching methodology demonstration" },
]

export default function MemberShowcase() {
  const [selectedItem, setSelectedItem] = useState<(typeof mediaItems)[0] | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleItemClick = (item: (typeof mediaItems)[0]) => {
    setSelectedItem(item)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    // Delay setting selectedItem to null slightly to allow fade-out animation if desired
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(100px,_auto)]"> {/* Adjusted auto-rows */}
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`${getColumnSpan(item.ratio)} ${getRowSpan(item.ratio)} bg-muted rounded-lg overflow-hidden shadow-sm h-full cursor-pointer relative group`} // Added relative and group here
            style={{ aspectRatio: item.ratio.replace("/", " / ") }} // Apply aspect ratio to the container
            onClick={() => handleItemClick(item)}
          >
            {/* Render Image or Video */}
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.description}
                layout="fill" // Fill the container
                objectFit="cover" // Cover the container, cropping if necessary
                className="transition-transform duration-300 group-hover:scale-105" // Added zoom effect on hover
                priority={index < 8} // Prioritize loading images visible above the fold (adjust count as needed)
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Help optimize image loading
              />
            ) : (
              <video
                src={item.src}
                muted // Mute videos in the grid view
                loop // Loop videos in the grid view
                playsInline // Important for mobile browsers
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Added zoom effect on hover
              >
                Your browser does not support the video tag.
              </video>
            )}

            {/* Overlay with description */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white">
              <p className="font-medium text-center text-sm sm:text-base">{item.description}</p>
              <div className="mt-2 text-xs sm:text-sm border border-white/70 px-2 py-1 rounded-full">
                {item.type === "video" ? "Play Video" : "View Image"}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden flex flex-col"> {/* Adjusted padding and flex */}
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {selectedItem && (
            <div className="flex-grow flex items-center justify-center bg-black/90 p-1"> {/* Center content */}
              {/* Use relative container for sizing */}
              <div className="relative w-full h-full max-w-full max-h-[calc(90vh-80px)]"> {/* Limit size */}
                 {selectedItem.type === "image" ? (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.description}
                    layout="fill"
                    objectFit="contain" // Contain the image within the bounds
                  />
                ) : (
                  <video
                    src={selectedItem.src}
                    controls // Show video controls in the dialog
                    autoPlay // Autoplay when opened
                    className="w-full h-full object-contain" // Contain the video
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          )}
           {selectedItem && (
             <div className="p-4 bg-background border-t"> {/* Info section */}
                <h3 className="text-lg font-semibold text-primary">{selectedItem.description}</h3>
                {/* You can add more descriptive text here if needed */}
             </div>
           )}
        </DialogContent>
      </Dialog>
    </div>
  )
}