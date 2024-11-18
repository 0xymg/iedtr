import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ChevronRight, Download, Fullscreen, Save, Eraser, Square, Type, Brush, Settings, Moon, Minimize2, Crop, Trash, Sparkles, Scaling, Upload, Undo, Redo, ZoomIn, ZoomOut, Coffee } from "lucide-react"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center justify-between gap-2 border-b bg-background p-4">

          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Undo />
            </Button>
            <Button variant="outline" size="icon">
              <Redo />
            </Button>
            <Separator orientation="vertical" className="mx-2 h-8" />
            <Button variant="outline" size="icon">
              <ZoomIn />
            </Button>
            <Button variant="outline" size="icon">
              <ZoomOut />
            </Button>
            <Separator orientation="vertical" className="mx-2 h-8" />
            <Button variant="outline" size="icon">
              <Fullscreen />
            </Button>
            <Button variant="outline" size="icon">
              <Trash />
            </Button>

          </div>

          <div className="flex gap-2">

            <Button variant="outline" size="icon">
              <Download />
            </Button>
            <Button variant="outline" size="icon">
              <Settings />
            </Button>


          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 items-center justify-center">
          <div className="flex w-full border rounded-lg p-4 h-full">CANVAS</div>
        </div>
        <footer className="sticky bottom-0 flex shrink-1 items-center justify-center gap-2 border-t h-48 bg-gray-50 p-4">

          <div></div>

        </footer>

        <footer className="sticky bottom-0 flex shrink-0 items-center  border-t bg-black-100 text-gray-400 text-xs px-1 py-0.5 justify-end ">
          <div> &copy; <span className="font-semibold">EDTR.</span> All rights reserved... We all <span className="text-red-600">♥</span> images.</div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
