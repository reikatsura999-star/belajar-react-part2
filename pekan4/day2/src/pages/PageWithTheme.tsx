import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-sans transition-colors duration-300">

        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        <div className="w-full max-w-md rounded-2xl bg-card p-8 shadow-2xl border border-border">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-card-foreground">Versi Rilis</h2>
              <p className="text-sm text-muted-foreground">Daftar riwayat rilis aplikasi Anda.</p>
            </div>
            <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {tags.length} Versi
            </div>
          </div>

          <ScrollArea className="h-72 w-full rounded-xl border border-border bg-muted/50">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none text-card-foreground border-b border-border pb-2">
                Tags
              </h4>
              {tags.map((tag) => (
                <React.Fragment key={tag}>
                  <div className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-muted/80 hover:shadow-sm transition-all cursor-default group">
                    <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                      {tag}
                    </span>
                  </div>
                  <div className="h-px bg-border my-1 mx-2 last:hidden" />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>

          <div className="mt-6 flex justify-end">
            <button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all active:scale-95">
              Lihat Semua Detail
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
