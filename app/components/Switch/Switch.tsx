"use client";

import { useState } from "react";

import SwitchProps from "./Switch.types";

export default function Switch({
  checked,
  onCheckedChange,
  disabled = false,
  className = "",
}: SwitchProps) {
  const [internal, setInternal] = useState(false);

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internal;

  function toggle() {
    if (disabled) return;

    const next = !isChecked;

    if (!isControlled) {
      setInternal(next);
    }

    onCheckedChange?.(next);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={toggle}
      disabled={disabled}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors
        ${isChecked ? "bg-blue-600" : "bg-gray-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white transition-transform
          ${isChecked ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}
