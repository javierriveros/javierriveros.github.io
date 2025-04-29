import * as React from "react";

import { useMedia } from "./useMedia";
import { useLocalStorage } from "./useLocalStorage";

function usePrefersDarkMode() {
  return useMedia<boolean>(["(prefers-color-scheme: dark)"], [true], false);
}

export function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage(
    "dark-mode-enabled",
    false
  );

  const prefersDarkMode = usePrefersDarkMode();
  const enabled = enabledState ?? prefersDarkMode;

  React.useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;

    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, []);

  React.useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState];
}
