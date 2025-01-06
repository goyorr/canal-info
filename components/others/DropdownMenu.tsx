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
            <Link href={"/homepagetwo"}>Pc Portable</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/shoppagetwo"}>Pc Bureau</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/blogpageone"}>Imprimante</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/blogpagetwo"}>Photocopieur</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/dashboard"}>Scanner</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/sign-up"}>Logiciels</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/sign-in"}>IT Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/sign-in"}>Other Services and Hardware</Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <Link href={"/forgot-password"}>Forgot Password Page</Link>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuComponent;
