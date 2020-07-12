import { createMuiTheme } from "@material-ui/core/styles";

export const pxToRem = (px) => `${px / 22.5}rem`;
export const pxToVw = (px) =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = (px) =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  palette: {
    primary: {
      main: "rgb(255,255,255)",
    },
    secondary: {
        main: "#FE8611",
        light: "#FFD990",
      },
  },
  typography: {
    fontFamily:[
        'Raleway',
        'Montserrat',
        'Open Sans',
        'sans-serif'
    ].join(','),
    }
});