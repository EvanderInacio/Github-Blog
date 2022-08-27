import { styled } from "../../styles"

export const UseCardContainer = styled("div" , {
  display: "flex",
  // flexDirection: "column",
  backgroundColor: "$primaryShape",
  width: "100%",
  padding: "2rem 2.5rem",
  alignItems: "center",
  gap: "2rem",
  borderRadius: "10px",

  variants: {
    response: {
      rowGap: {flexDirection: "row"},
      columnGap: {flexDirection: "column"},
    },
  },

  img: {
    width: "148px",
    height: "148px",
    // border: "2px solid $brand",
    borderRadius: "10px",
  },
})

export const UseCardContent = styled("div" , {})

export const UseCardNameContainer = styled("div" , {})
