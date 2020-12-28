import { CircularProgress } from "@material-ui/core"

export const Progress = () => (
  <div style={{ position: "absolute", top: "50%", left: "50%" }}>
    <CircularProgress color="secondary" />
  </div>
)
