import React, { useState, createContext } from "react"

import { useDarkMode } from "../hooks/useDarkMode"
import { darkTheme, lightTheme } from "../components/theme"

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useDarkMode()

  const [theme, setTheme] = useState(darkMode ? darkTheme : lightTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
