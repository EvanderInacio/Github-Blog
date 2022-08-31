import { styled } from '..'

export const PostContent = styled('div', {
  padding: "32px 40px",

  h2: {
    margin: "30px 0",
    fontSize: "30px",
    color: "$title",
  },

  ".react-markdown": {
    whiteSpace: "pre-wrap",
  },

  a:{
    textDecoration: "none",
    color: "$brand",
  },
  
  ul: {
    paddingLeft: "20px",
  },

  img: { 
    margin: "40px 0",
    maxWidth: "100%",
  },
})