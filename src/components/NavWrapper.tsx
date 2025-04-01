"use client";

import { usePathname } from "next/navigation";
import NavigationBar from "@/components/NavigationBar";

const NavWrapper: React.FC = () => {
  return usePathname().includes("/v1") ? null : <NavigationBar />;
}

export default NavWrapper;
