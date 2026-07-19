import { ModeToggle } from "@/components/(app)/(common)/(theme)/mode-toggler";
import { AppShell } from "@/components/(app)/(common)/app-shell";
import { AppShellContainer } from "@/components/(app)/(common)/app-shell-container";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <AppShell>
      <AppShellContainer className="py-2">
        <ModeToggle />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus blanditiis
        debitis officia dolore vel libero, perferendis itaque, aut ab eaque at ipsum labore
        asperiores suscipit velit quam ex facilis!
        <Button>Checks</Button>
      </AppShellContainer>
    </AppShell>
  );
};

export default HomePage;
