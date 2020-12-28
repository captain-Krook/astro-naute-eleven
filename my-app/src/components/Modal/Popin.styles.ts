import { makeStyles, createStyles } from "@material-ui/core"

export const useStyles = makeStyles(() => {
  return createStyles({
    content: {
      position: "absolute",
      width: 700,
      height: "auto",
      backgroundColor: "white",
      padding: "1em",
      "& p": { fontWeight: 300, fontSize: "1.2em" },
    },
    modal: { display: "flex", alignItems: "center", justifyContent: "center" },
  })
})
