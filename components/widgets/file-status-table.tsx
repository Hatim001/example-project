"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"

type Row = {
  event: string
  direction: "Inbound" | "Outbound"
  fileName: string
  author: string
  transmitted: string
  status: "Delivered" | "In Progress" | "Received" | "Error" | "Duplicate"
  size: string
}

const seed: Row[] = [
  {
    event: "07-30-2025 10:00am",
    direction: "Outbound",
    fileName: "Tradefile.XLSX",
    author: "Lee Mike",
    transmitted: "07-30-2025 10:15am",
    status: "Delivered",
    size: "20MB",
  },
  {
    event: "07-30-2025 10:02am",
    direction: "Outbound",
    fileName: "FeeSchedule.CSV",
    author: "Smith Anna",
    transmitted: "07-30-2025 10:20am",
    status: "In Progress",
    size: "30MB",
  },
  {
    event: "07-30-2025 10:03am",
    direction: "Outbound",
    fileName: "ReferenceData.TXT",
    author: "Dowell Chris",
    transmitted: "07-30-2025 10:30am",
    status: "Delivered",
    size: "15GB",
  },
  {
    event: "07-31-2025 08:01am",
    direction: "Inbound",
    fileName: "Invoice.XLSX",
    author: "SmartStream",
    transmitted: "07-31-2025 08:00am",
    status: "Received",
    size: "1GB",
  },
  {
    event: "07-31-2025 11:00am",
    direction: "Outbound",
    fileName: "ReferenceData.TXT",
    author: "Dowell Chris",
    transmitted: "07-31-2025 11:07am",
    status: "Error",
    size: "1.5GB",
  },
  {
    event: "07-31-2025 12:00pm",
    direction: "Outbound",
    fileName: "Tradefile01.TXT",
    author: "Dowell Chris",
    transmitted: "07-31-2025 12:05pm",
    status: "Duplicate",
    size: "1.5GB",
  },
]

export default function FileStatusTable() {
  const [query, setQuery] = React.useState("")
  const rows = seed.filter((r) => r.fileName.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="rounded-md border">
      <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between border-b">
        <h3 className="font-semibold text-sm">File transmission Status</h3>
        <div className="flex items-center gap-2">
          <Label htmlFor="search" className="sr-only">
            search
          </Label>
          <Input
            id="search"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-8 w-[220px]"
          />
        </div>
      </div>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>EventDateTime</TableHead>
              <TableHead>Direction</TableHead>
              <TableHead>FileName</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>transmittedDateTime</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>FileSize</TableHead>
              <TableHead>FileLink</TableHead>
              <TableHead>Select</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i}>
                <TableCell className="whitespace-nowrap">{r.event}</TableCell>
                <TableCell>{r.direction}</TableCell>
                <TableCell className="font-medium">{r.fileName}</TableCell>
                <TableCell>{r.author}</TableCell>
                <TableCell className="whitespace-nowrap">{r.transmitted}</TableCell>
                <TableCell>{r.status}</TableCell>
                <TableCell>{r.size}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                </TableCell>
                <TableCell>
                  <input type="checkbox" aria-label={`select ${r.fileName}`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between p-3 border-t">
        <div className="flex items-center gap-2">
          <Label htmlFor="search2" className="sr-only">
            search
          </Label>
          <Input id="search2" placeholder="search" className="h-8 w-[200px]" />
        </div>
        <div className="flex items-center gap-2">
          <Label className="text-sm text-muted-foreground">Category</Label>
          <div className="h-8 w-36 rounded-md border grid place-items-center text-xs text-muted-foreground">Select</div>
          <Button size="sm" variant="outline">
            Download Bulk
          </Button>
        </div>
      </div>
    </div>
  )
}
