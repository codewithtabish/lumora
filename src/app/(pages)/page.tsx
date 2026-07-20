import { ModeToggle } from "@/components/(app)/(common)/(theme)/mode-toggler";
import { AppShell } from "@/components/(app)/(common)/app-shell";
import { AppShellContainer } from "@/components/(app)/(common)/app-shell-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <AppShell>
      <AppShellContainer className="py-2">
        <ModeToggle />
        <hr />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus blanditiis
        debitis officia dolore vel libero, perferendis itaque, aut ab eaque at ipsum labore
        asperiores suscipit velit quam ex facilis!
        <Button>Checks</Button>
        <Link href={"/onboarding"}>
          <Button>Onboading</Button>
        </Link>
      </AppShellContainer>
    </AppShell>
  );
};

export default HomePage;
