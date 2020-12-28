import { Grid } from "@material-ui/core"
import * as React from "react"
import { useRecoilValue } from "recoil"
import { Popin } from "../../components/Modal/Popin"
import { selectPictureAndDescribe } from "../../store/selector"
import { useStyles } from "./PictureOfDay.styles"
import lost from "../../img/astronaute.jpg"

export const PictureOfDay = (): JSX.Element => {
  const classes = useStyles()
  const pictureAndDescribe = useRecoilValue(selectPictureAndDescribe)

  if (pictureAndDescribe !== undefined) {
    const { url, title, explanation, copyright, hdurl } = pictureAndDescribe

    return (
      <Grid container className={classes.root}>
        <Grid item md={12} className={classes.contentImgAndDescribe}>
          <img src={url} alt={title} loading="lazy" />
          <h1>{title}</h1>
          <Popin explanation={explanation} copyright={copyright} hdurl={hdurl} />
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid item md={12} className={classes.root}>
        <h1>Houston, we have a problem !</h1>
        <img src={lost} alt={"LOST"} />
      </Grid>
    )
  }
}
