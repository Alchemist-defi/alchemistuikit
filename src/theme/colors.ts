import { Colors } from "./types";

export const baseColors = {
  failure: "#7F2D00",
  primary: "#2d50e6",
  primaryBright: "#2686FC",
  primaryDark: "#003ECF",
  secondary: "#0088F6",
  success: "#559917",
  warning: "#8E4B5D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fcf7e8",
  backgroundDisabled: "#e9eaeb",
  contrast: "#191326",
  invertedContrast: "#f2f2f2",
  input: "#eeeaf4",
  tertiary: "#d5dcfa",
  text: "#12205c",
  textDisabled: "#8196f0",
  textSubtle: "#1b308a",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
