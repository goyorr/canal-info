"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { set } from "react-hook-form"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  const [theme, setThemeState] = useState("dark")

  const states = (th: React.SetStateAction<string>) => {
    setThemeState(th)
    setTheme(th)
  }

  return (
    <Button
      onClick={() => states(theme === 'dark' ? 'light' : 'dark')}
      variant="link"
      className="hover:bg-gray-200 dark:hover:bg-gray-800 duration-200 p-2"
      size="icon"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-transform duration-300" />
      ) : (
        <Moon className="h-[1.5rem] w-[1.5rem] rotate-90 scale-100 transition-transform duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
