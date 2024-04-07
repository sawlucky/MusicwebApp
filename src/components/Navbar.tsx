"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto mt-7 z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem active={active} setActive={setActive} item="Courses">
            <div className="flex flex-col space-y-4 text-lg">
              <HoveredLink href="/">Web Development</HoveredLink>
              <HoveredLink href="/">Interface Design</HoveredLink>
              <HoveredLink href="/">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/">Branding</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="About us">
          <div className="flex flex-col space-y-4 text-lg">
            <HoveredLink href="/">settings</HoveredLink>
            <HoveredLink href="/">Interface </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
