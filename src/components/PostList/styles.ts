import { styled } from "../../styles";

export const PostListContainer = styled("div" , {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "32px",
  margin: "48px 0 234px 0",
})

export const PostListItens = styled("article" , {
  backgroundColor: "$secondaryShape",
  border: "2px solid $secondaryShape",
  padding: "30px",
  borderRadius: "10px",
  cursor: "pointer",

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "20px",
  },

  h3: {
    maxWidth: "283px",

  },


  "&:hover": {
    border: "2px solid $brand",
  }
})