"use client";

import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  console.log("theme", theme)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  });

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Sun className="h-4 w-4" />
        <Switch disabled />
        <Moon className="h-4 w-4" />
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-4 w-4 transition-colors ${
          theme === "light" ? "text-yellow-500" : "text-muted-foreground"
        }`}
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Moon
        className={`h-4 w-4 transition-colors ${
          theme === "dark" ? "text-yellow-500" : "text-muted-foreground"
        }`}
      />
    </div>
  );
}