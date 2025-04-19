
const COLOR = {
  RED_dark: "#400000",
  RED_FMM: "#800000",
  RED_Hollow: "#c00000",
  RED_True: "#ff0000",
  BLUE_FMM: "#000080",
  BLUE_Hollow: "#0000c0",
  BLUE_True: "#0000ff",
  WHITE_tintedRed: "#ffb0b0",
  WHITE_tintedBlue: "#b0b0ff",
};

const ColorSet = {
  RED: {
    FMM: "#800000",
    Hollow: "#c00000",
    True: "#ff0000",
    tintedWhite: "#ffb0b0",
  },
  BLUE: {
    FMM: "#000080",
    Hollow: "#0000c0",
    True: "#0000ff",
    tintedWhite: "#b0b0ff",
  },
}

function fontMaker(size, bold = false, font = "Arial", ctxH = 1080) {
  let fontSize = Math.round(size * (ctxH / 1080));
  let fontStyle = `${fontSize}px ${font}`;
  if (bold) fontStyle += " bold";
  return fontStyle;
}

// const FONT = {
//   SMALL: "12px Arial",
//   DEFAULT: "18px Arial",
//   MEDIUM: "24px Arial",
//   BIG: "32px Arial",
//   TITLE: "48px Arial bold",
// };
