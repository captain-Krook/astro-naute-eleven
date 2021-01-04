import { makeStyles, createStyles } from "@material-ui/core"

export const useStyles = makeStyles(() => {
  return createStyles({
    root: { margin: "4em 0 9em 0", textAlign: "center" },
    video: { margin: "auto" },
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
