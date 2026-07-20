import { AppShell } from "@/components/(app)/(common)/app-shell";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { BookOpen, Headphones, Sparkles } from "lucide-react";

const HomeScreenPage = () => {
  return (
    <AppShell>
      <main className="flex min-h-dvh flex-col bg-background px-5 py-8">
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
          {/* Header */}
          <div>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Headphones className="h-7 w-7" />
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight">Welcome to Lumora 👋</h1>

            <p className="mt-2 text-muted-foreground">
              Enjoy your favorite audiobooks, podcasts and stories anytime, anywhere.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 rounded-3xl border bg-card p-5 shadow-sm">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>

              <div>
                <h2 className="font-semibold">Your Library</h2>
                <p className="text-sm text-muted-foreground">Browse all your saved audiobooks.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl border bg-card p-5 shadow-sm">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>

              <div>
                <h2 className="font-semibold">Discover</h2>
                <p className="text-sm text-muted-foreground">
                  Explore new stories recommended for you.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-auto pt-8">
            <SignOutButton>
              <Button variant="destructive" className="h-12 w-full rounded-2xl">
                Logout
              </Button>
            </SignOutButton>
          </div>
        </div>
      </main>
    </AppShell>
  );
};

export default HomeScreenPage;
