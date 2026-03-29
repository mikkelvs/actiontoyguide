"use client";

import { useState } from "react";

import { setStoredTheme, Theme } from "@/lib/theme";

import Switch from "../Switch/Switch";
import ThemeToggleProps from "./ThemeToggle.types";

const ThemeToggle = ({ className }: ThemeToggleProps): React.JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  function toggleTheme(value: boolean) {
    const root = document.documentElement;
    const newTheme: Theme = value ? "dark" : "light";
    setChecked(value);
    setStoredTheme(newTheme);
    root.classList.toggle("dark", value);
  }

  return (
    <div className={`flex items-center gap-2 ${className ? className : ""}`}>
      <Switch checked={checked} onCheckedChange={toggleTheme} />
      {/* <span className="text-sm">{checked ? "Dark" : "Light"}</span> */}
    </div>
  );
};

export default ThemeToggle;
