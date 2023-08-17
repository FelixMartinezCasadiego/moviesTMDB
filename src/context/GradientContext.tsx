import {createContext, useState} from 'react';

interface ImgColors {
  primary: string;
  secondary: string;
}
interface ContextProps {
  colors: ImgColors;
  prevColors: ImgColors;
  setPrevMainColor: (colors: ImgColors) => void;
  setMainColors: (colors: ImgColors) => void;
}

interface GradientProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GradientContext = createContext({} as ContextProps);
export const GradientProvider = ({children}: GradientProviderProps) => {
  const [colors, setColors] = useState<ImgColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ImgColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const setMainColors = (colors: ImgColors) => {
    setColors(colors);
  };
  const setPrevMainColor = (colors: ImgColors) => {
    setPrevColors(colors);
  };
  return (
    <GradientContext.Provider
      value={{colors, prevColors, setMainColors, setPrevMainColor}}>
      {children}
    </GradientContext.Provider>
  );
};
