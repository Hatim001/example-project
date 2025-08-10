"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React from "react"

export default function UploadCard() {
  const [files, setFiles] = React.useState<File[]>([])
  const [dragOver, setDragOver] = React.useState(false)

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    const list = Array.from(e.dataTransfer.files)
    setFiles((prev) => [...prev, ...list])
    setDragOver(false)
  }

  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle className="text-base">Upload</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Label className="w-36 text-sm">Select Category</Label>
          <Select defaultValue="inbound">
            <SelectTrigger className="w-56">
              <SelectValue placeholder="Choose..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inbound">Inbound</SelectItem>
              <SelectItem value="outbound">Outbound</SelectItem>
              <SelectItem value="internal">Internal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div
          className={`rounded-md border p-6 text-sm text-muted-foreground grid place-items-center aspect-[5/2] sm:aspect-[5/1.5] ${dragOver ? "bg-muted/50" : ""}`}
          onDragOver={(e) => {
            e.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          aria-label="Drag and Drop to attach"
        >
          <div className="text-center">
            <div className="font-medium text-foreground mb-1">Drag and Drop to attach</div>
            <div>or</div>
            <div className="mt-3">
              <label className="inline-flex">
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => setFiles(Array.from(e.target.files || []))}
                />
                <Button variant="outline" size="sm">
                  Attach Files
                </Button>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            {files.length ? `${files.length} file(s) selected` : "No files selected"}
          </div>
          <Button size="sm">Upload</Button>
        </div>
      </CardContent>
    </Card>
  )
}
