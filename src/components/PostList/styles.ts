import { styled } from "../../styles";

export const PostListContainer = styled("div" , {
  display: "grid",
  gap: "32px",
  margin: "48px 0 234px 0",

  variants: {
    active: {
      desktop: {
        gridTemplateColumns: "1fr",
      },
      mobile: {
        gridTemplateColumns: "1fr 1fr",
      },
    },
  },
})

export const PostListItens = styled("article" , {
  backgroundColor: "$secondaryShape",
  border: "2px solid $secondaryShape",
  padding: "32px",
  borderRadius: "10px",
  cursor: "pointer",
  maxHeight: "200px",

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "20px",
  },

  h3: {
    maxWidth: "283px",
  },

  p:{
    overflow: "hidden",
    "-webkit-line-clamp": 4,
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
  },


  "&:hover": {
    border: "2px solid $brand",
  }
})