// src/contexts/SettingsContext.js
import React, { createContext, useEffect, useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import _ from "lodash";
import { createTheme } from "../theme";

const defaultSettings = {
  direction: "ltr",
  responsiveFontSizes: true,
  theme: "LIGHT",
};

const restoreSettings = () => {
  let settings = null;
  try {
    const storedData = window.localStorage.getItem("settings");
    if (storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (err) {
    console.error(err);
  }
  return settings;
};

const storeSettings = (settings) => {
  window.localStorage.setItem("settings", JSON.stringify(settings));
};

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    restoreSettings() || defaultSettings
  );

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = _.merge({}, currentSettings, update);
    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  const theme = useMemo(() => createTheme(currentSettings), [currentSettings]);

  useEffect(() => {
    document.dir = currentSettings.direction;
  }, [currentSettings]);

  return (
    <SettingsContext.Provider
      value={{ settings: currentSettings, saveSettings: handleSaveSettings }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
export default SettingsContext;
