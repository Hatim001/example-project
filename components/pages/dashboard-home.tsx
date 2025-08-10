"use client"

import UploadCard from "@/components/widgets/upload-card"
import FileStatusTable from "@/components/widgets/file-status-table"

export default function DashboardHome() {
  return (
    <div className="grid gap-4">
      <section className="rounded-md border bg-background">
        <div className="p-4 border-b">
          <h2 className="text-base font-semibold">GUI Dashboard</h2>
        </div>
        <div className="p-4 grid gap-6">
          <UploadCard />
          <FileStatusTable />
        </div>
      </section>
    </div>
  )
}
