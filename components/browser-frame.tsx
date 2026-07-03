import React from 'react'

export function BrowserFrame({ children, url }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="relative rounded-xl border border-border bg-card shadow-xl overflow-hidden group">
      {/* Mock Browser Header */}
      <div className="flex items-center justify-between border-b border-border bg-secondary/15 px-4 py-2.5 select-none">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-[#FF5F56]" />
          <div className="size-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="size-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex h-5 w-3/5 items-center justify-center rounded bg-background/50 px-3 text-[10px] font-mono text-muted-foreground truncate">
          {url || 'localhost:3000'}
        </div>
        <div className="w-10" /> {/* Spacer */}
      </div>
      {/* Content */}
      <div className="relative overflow-hidden bg-background">
        {children}
      </div>
    </div>
  )
}
