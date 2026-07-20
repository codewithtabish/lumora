import { ModeToggle } from "@/components/(app)/(common)/(theme)/mode-toggler";
import { AppShell } from "@/components/(app)/(common)/app-shell";
import { AppShellContainer } from "@/components/(app)/(common)/app-shell-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const HomePage = () => {
  return redirect("/onboarding");
  // <AppShell>
  //   <AppShellContainer className="py-2">
  //     <ModeToggle />
  //     <hr />
  //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus blanditiis
  //     debitis officia dolore vel libero, perferendis itaque, aut ab eaque at ipsum labore
  //     asperiores suscipit velit quam ex facilis! Lorem, ipsum dolor sit amet consectetur
  //     adipisicing elit. Delectus mollitia molestiae eaque unde doloremque numquam illo cupiditate
  //     temporibus sint maxime tempora soluta, quas distinctio atque earum, incidunt animi
  //     voluptatum minima! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
  //     mollitia molestiae eaque unde doloremque numquam illo cupiditate temporibus sint maxime
  //     tempora soluta, quas distinctio atque earum, incidunt animi voluptatum minima! Lorem, ipsum
  //     dolor sit amet consectetur adipisicing elit. Delectus mollitia molestiae eaque unde
  //     doloremque numquam illo cupiditate temporibus sint maxime tempora soluta, quas distinctio
  //     atque earum, incidunt animi voluptatum minima! Lorem ipsum dolor sit amet consectetur
  //     adipisicing elit. Nisi debitis tempore corporis mollitia, voluptates impedit aliquam, earum
  //     ex sapiente voluptatibus aliquid dignissimos ut laboriosam quis in repellendus, omnis
  //     accusantium quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem qui
  //     accusantium numquam iusto ex aut quis ipsam blanditiis totam debitis, doloribus alias et
  //     nisi rerum quod porro dolore quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //     Tempora rem qui accusantium numquam iusto ex aut quis ipsam blanditiis totam debitis,
  //     doloribus alias et nisi rerum quod porro dolore quas. Lorem ipsum dolor sit amet consectetur
  //     adipisicing elit. Tempora rem qui accusantium numquam iusto ex aut quis ipsam blanditiis
  //     totam debitis, doloribus alias et nisi rerum quod porro dolore quas.
  //     <Button>Checks</Button>
  //     <Link href={"/onboarding"}>
  //       <Button>Onboading</Button>
  //     </Link>
  //   </AppShellContainer>
  // </AppShell>
};

export default HomePage;
