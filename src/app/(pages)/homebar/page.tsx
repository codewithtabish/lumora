import { ModeToggle } from "@/components/(app)/(common)/(theme)/mode-toggler";
import { AppShell } from "@/components/(app)/(common)/app-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignOutButton } from "@clerk/nextjs";
import {
  BookOpen,
  Headphones,
  Search,
  Clock3,
  Heart,
  Mic2,
  ChevronRight,
  Library,
  Flame,
} from "lucide-react";

const HomeScreenPage = () => {
  return (
    <AppShell>
      <main className="min-h-dvh bg-background">
        <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-8 pt-6">
          {/* Header */}
          <section>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Good Evening 👋</p>

                <h1 className="mt-1 text-3xl font-bold tracking-tight">
                  Welcome to Lumora . <ModeToggle />
                </h1>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-lg">
                <Headphones className="h-7 w-7" />
              </div>
            </div>

            {/* Search */}
            <div className="relative mt-6">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

              <Input placeholder="Search audiobooks..." className="h-12 rounded-2xl pl-11" />
            </div>
          </section>

          {/* Continue Listening */}
          <section className="mt-8">
            <div className="overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-indigo-600 p-6 text-white shadow-xl">
              <div className="inline-flex rounded-full bg-white/20 p-3 backdrop-blur">
                <Headphones className="h-6 w-6" />
              </div>

              <h2 className="mt-5 text-2xl font-bold">Continue Listening</h2>

              <p className="mt-2 text-sm text-white/80">The Psychology of Success</p>

              <Button variant="secondary" className="mt-6 h-11 rounded-xl">
                Resume
              </Button>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Quick Actions</h2>

              <button className="text-sm text-primary">View All</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border bg-card p-5 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Library className="h-6 w-6" />
                </div>

                <h3 className="font-semibold">Library</h3>

                <p className="mt-1 text-xs text-muted-foreground">Your saved books</p>
              </div>

              <div className="rounded-3xl border bg-card p-5 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <Flame className="h-6 w-6" />
                </div>

                <h3 className="font-semibold">Trending</h3>

                <p className="mt-1 text-xs text-muted-foreground">Popular today</p>
              </div>

              <div className="rounded-3xl border bg-card p-5 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
                  <Heart className="h-6 w-6" />
                </div>

                <h3 className="font-semibold">Favorites</h3>

                <p className="mt-1 text-xs text-muted-foreground">Saved stories</p>
              </div>

              <div className="rounded-3xl border bg-card p-5 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <Mic2 className="h-6 w-6" />
                </div>

                <h3 className="font-semibold">Podcasts</h3>

                <p className="mt-1 text-xs text-muted-foreground">Latest episodes</p>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Categories</h2>

              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {["Business", "Self Growth", "Technology", "Education", "Motivation", "Health"].map(
                (item) => (
                  <button
                    key={item}
                    className="whitespace-nowrap rounded-full border bg-card px-5 py-2 text-sm font-medium transition hover:bg-primary hover:text-primary-foreground"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </section>

          {/* Recommended */}
          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Recommended</h2>

              <button className="text-sm text-primary">See All</button>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Atomic Habits",
                  subtitle: "James Clear",
                },
                {
                  title: "Deep Work",
                  subtitle: "Cal Newport",
                },
              ].map((book) => (
                <div
                  key={book.title}
                  className="flex items-center gap-4 rounded-3xl border bg-card p-4 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold">{book.title}</h3>

                    <p className="text-sm text-muted-foreground">{book.subtitle}</p>

                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock3 className="h-4 w-4" />
                      5h 20m
                    </div>
                  </div>

                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </section>

          {/* Logout */}
          <div className="mt-auto pt-10">
            <SignOutButton>
              <Button
                variant="destructive"
                className="h-12 w-full rounded-2xl text-base font-semibold shadow-lg"
              >
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
