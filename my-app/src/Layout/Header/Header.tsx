import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { useStyles } from "./Header.styles"

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar color="secondary" position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h6">AstroNaute</Typography>
      </Toolbar>
    </AppBar>
  )
}
