"use client";

import { useEffect, useState } from "react";

import { applyTheme, getStoredTheme, setStoredTheme } from "@/lib/theme";

import Switch from "../Switch/Switch";

const ThemToggle = (): React.JSX.Element => {
  const [checked, setChecked] = useState(() => {
    const stored = getStoredTheme();
    const isDark = stored === "dark";
    applyTheme(isDark ? "dark" : "light");
    return isDark;
  });

  // Initialize theme on mount
  useEffect(() => {
    const stored = getStoredTheme();
    applyTheme(stored === "dark" ? "dark" : "light");
  }, []);

  function toggleTheme(value: boolean) {
    const newTheme = value ? "dark" : "light";
    setChecked(value);
    setStoredTheme(newTheme);
    applyTheme(newTheme);
  }

  return (
    <div className="flex items-center gap-2">
      <Switch checked={checked} onCheckedChange={toggleTheme} />
      <span className="text-sm">{checked ? "Dark" : "Light"}</span>
    </div>
  );
};

export default ThemToggle;
