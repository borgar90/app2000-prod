import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const useStrings = () => {
  const { language, strings } = useContext(LanguageContext);

  return {
    common: strings.common,
    pieces: strings.pieces,
    colors: strings.colors,
    language: language,
    moves: strings.moves,
    pageTitle: strings.pageTitle,
  };
};

export default useStrings;
