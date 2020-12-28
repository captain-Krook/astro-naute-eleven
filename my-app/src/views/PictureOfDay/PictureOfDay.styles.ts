import { makeStyles, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => {
  return createStyles({
    root: { marginTop: "4em", textAlign: "center" },
    contentImgAndDescribe: {
      "& img": {
        width: "40%",
      },
      "& h1": {
        fontWeight: "200",
      },
    },
  })
})
