import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function AppShellContainer({ children, className }: PageContainerProps) {
  return <main className={cn("flex-1 px-4 py-6", className)}>{children}</main>;
}
