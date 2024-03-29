import * as React from "react";

import { useMedia } from "./useMedia";
import { useLocalStorage } from "./useLocalStorage";

function usePrefersDarkMode() {
  return useMedia<boolean>(["(prefers-color-scheme: dark)"], [true], false);
}

export function useDarkMode() {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage(
    "dark-mode-enabled",
    false
  );

  // See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  const prefersDarkMode = usePrefersDarkMode();

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled = enabledState ?? prefersDarkMode;

  // Fire off effect that add/removes dark mode class
  React.useEffect(
    () => {
      const className = "dark-mode";
      const element = window.document.body;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [enabled, setEnabledState];
}
