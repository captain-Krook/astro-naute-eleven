import React from "react"
import { RecoilRoot } from "recoil"
import { Header } from "./Layout/Header/Header"
import { PictureOfDay } from "./views/PictureOfDay/PictureOfDay"
import { Grid } from "@material-ui/core"
import { TimePicker } from "./components/TimePicker/TimePicker"
import { Progress } from "./components/Progress/Progress"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <RecoilRoot>
        <Grid container item md={12} justify="center">
          <TimePicker />
        </Grid>
        <React.Suspense fallback={<Progress />}>
          <PictureOfDay />
        </React.Suspense>
      </RecoilRoot>
    </div>
  )
}
