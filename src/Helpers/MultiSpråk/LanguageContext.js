import React, { createContext } from "react";
import Strings from "../Strings/Strings";

export const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
const LanguageProvider = ({ language, setLanguage, children }) => {
  const strings = Strings[language];

  const value = {
    language,
    setLanguage,
    strings,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
export default LanguageProvider;
