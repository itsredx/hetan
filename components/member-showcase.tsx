"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

// Placeholder data for the media showcase
// In a real application, these would be actual image and video paths
const mediaItems = [
  { type: "image", ratio: "16/9", placeholder: "Photo 1 (960x540)", description: "HETAN workshop session" },
  { type: "image", ratio: "16/9", placeholder: "Photo 2 (960x540)", description: "Members at annual conference" },
  { type: "image", ratio: "16/9", placeholder: "Photo 3 (960x540)", description: "Teaching demonstration" },
  { type: "image", ratio: "4/3", placeholder: "Photo 4 (1080x808)", description: "Community outreach program" },
  { type: "image", ratio: "2/1", placeholder: "Photo 5 (569x272)", description: "Executive committee meeting" },
  { type: "image", ratio: "5/3", placeholder: "Photo 6 (569x343)", description: "School visitation" },
  { type: "image", ratio: "5/3", placeholder: "Photo 7 (590x350)", description: "Student exhibition" },
  { type: "image", ratio: "1/1", placeholder: "Photo 8 (540x502)", description: "Resource development session" },
  { type: "image", ratio: "9/16", placeholder: "Photo 9 (540x960)", description: "Practical teaching session" },
  { type: "image", ratio: "9/16", placeholder: "Photo 10 (540x960)", description: "Skills acquisition workshop" },
  { type: "image", ratio: "9/16", placeholder: "Photo 11 (540x960)", description: "Teacher training program" },
  { type: "image", ratio: "9/16", placeholder: "Photo 12 (540x960)", description: "Curriculum development meeting" },
  { type: "video", ratio: "9/16", placeholder: "Video 1 (540x960)", description: "Teaching methodology demonstration" },
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
    setSelectedItem(null)
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`${getColumnSpan(item.ratio)} ${getRowSpan(item.ratio)} bg-muted rounded-lg overflow-hidden shadow-sm h-full cursor-pointer`}
            onClick={() => handleItemClick(item)}
          >
            <div className="relative h-full w-full group">
              {/* Placeholder for actual images/videos */}
              <div
                className={`bg-gradient-to-br from-primary/20 to-amber-100/40 w-full h-full flex items-center justify-center p-4 text-center`}
                style={{ aspectRatio: item.ratio.replace("/", "/") }}
              >
                <div className="text-primary font-medium">{item.placeholder}</div>
              </div>

              {/* Overlay with description */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white">
                <p className="font-medium text-center">{item.description}</p>
                <div className="mt-3 text-sm border border-white/70 px-3 py-1 rounded-full">
                  {item.type === "video" ? "Play Video" : "View Image"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {selectedItem && (
            <div className="p-1">
              <div
                className="bg-gradient-to-br from-primary/20 to-amber-100/40 w-full rounded-lg flex items-center justify-center p-8 text-center"
                style={{ aspectRatio: selectedItem.ratio.replace("/", "/") }}
              >
                <div className="text-primary font-medium text-xl">{selectedItem.placeholder}</div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-primary">{selectedItem.description}</h3>
                <p className="text-muted-foreground mt-2">
                  {selectedItem.type === "video"
                    ? "This is a video showcasing HETAN Kano Chapter activities."
                    : "This image captures a moment from HETAN Kano Chapter activities."}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
