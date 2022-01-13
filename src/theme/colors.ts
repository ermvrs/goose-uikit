import { Colors } from "./types";

export const baseColors = {
  failure: "#DE2727",
  primary: "#F37343",
  primaryBright: "#F37343",
  primaryDark: "#F37343",
  secondary: "#7645D9",
  success: "#0fbe7a",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#1F1D36", // değişti
  backgroundDisabled: "#3c3742",
  contrast: "#E6F8F1",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#FEECE9",
  text: "#E6F8F1",
  textDisabled: "#666171",
  textSubtle: "#F37343",
  borderColor: "#524B63",
  card: "#0B1018",
  white : '#FFFFFF',
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#1F1D36", // değişti
  backgroundDisabled: "#3c3742",
  contrast: "#E6F8F1",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#FEECE9",
  text: "#E6F8F1",
  textDisabled: "#666171",
  textSubtle: "#F37343",
  borderColor: "#524B63",
  card: "#0B1018",
  white : '#FFFFFF',
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
