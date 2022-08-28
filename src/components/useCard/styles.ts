import { styled } from "../../styles"

export const UserCardContainer = styled("div" , {
  display: "flex",
  // flexDirection: "column",
  backgroundColor: "$primaryShape",
  width: "100%",
  padding: "2rem 2.5rem",
  alignItems: "center",
  gap: "2rem",
  borderRadius: "10px",
  marginTop: "-80px",

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

export const UserCardContent = styled("div" , {
  display: "flex",
  flex: 1,
  flexDirection: "column",

  p: {
    marginTop: "8px",
    marginBottom: "25px",
  },
})

export const UserCardNameContainer = styled("div" , {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  width: "100%",

  a: {
    display: "flex",
    alignItems: "center",
    color: "$brand",
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "12px",

    svg: {
      marginLeft: "8px",
    }
  },

  variants: {
    response: {
      rowGap: {flexDirection: "row"},
      columnGap: {flexDirection: "column", gap: "1rem"},
    },
  },
})

export const InfoCard = styled("div" , {
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "25px",

  span: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  variants: {
    response: {
      rowGap: {flexDirection: "row"},
      columnGap: {flexDirection: "column", gap: "1rem"},
    },
  },
})