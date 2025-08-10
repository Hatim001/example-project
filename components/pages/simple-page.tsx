"use client"

export default function SimplePage({ title = "Page" }: { title?: string }) {
  return (
    <div className="rounded-md border bg-background p-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground">This is a placeholder screen.</p>
    </div>
  )
}
