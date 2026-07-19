import { cn } from "@/lib/utils";

type AppShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function AppShell({ children, className }: AppShellProps) {
  return (
    <main className="min-h-dvh bg-background">
      <div
        className={cn(
          "mx-auto flex min-h-dvh w-full max-w-md flex-col",
          "bg-background",
          className,
        )}
      >
        {children}
      </div>
    </main>
  );
}
