import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const DropdownMenuComponent = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 font-medium px-4 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
          Categories <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-6 space-y-2">
          <DropdownMenuItem>
            <Link href={"shop?category=PcPortable"}>Pc Portable</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"shop?category=PcBureau"}>Pc Bureau</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"shop?category=Imprimante"}>Imprimante</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"shop?category=Photocopieur"}>Photocopieur</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"shop?category=Scanner"}>Scanner</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"shop?category=Logiciels"}>Logiciels</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"shop?category=OurServices"}>Our Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-bold">
            <Link href={"http://localhost:3000/shop"}>All products</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuComponent;
