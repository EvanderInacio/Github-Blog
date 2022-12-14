import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
  },
  body: {
    background: "$background",
    color: "$text",
    fontFamily: "$default",
  },
  input: {
    fontFamily: "$default",
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "$title"
  },
  "::-webkit-scrollbar": {
    width: "0.5rem",
    backgroundColor: "$borderInput",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "$brand",
    borderRadius: "0.6rem",
  }
})