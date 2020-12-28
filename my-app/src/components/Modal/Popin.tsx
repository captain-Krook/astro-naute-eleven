import { Modal } from "@material-ui/core"
import { useStyles } from "./Popin.styles"
import { Button } from "@material-ui/core"
import React, { useState } from "react"

interface IPopinProps {
  explanation: string
  copyright: string
  hdurl: string
}

export const Popin = ({ explanation, copyright, hdurl }: IPopinProps): JSX.Element => {
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <Button component="button" variant="outlined" color="secondary" onClick={(): void => setIsOpen(true)}>
        Find out more
      </Button>
      <Modal
        open={isOpen}
        className={classes.modal}
        onClose={(): void => setIsOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        data-testid="modal"
      >
        <div className={classes.content}>
          ABOUT
          <p>{explanation}</p>
          <span>{copyright}</span>
          <div>
            <a href={hdurl} target="_blank" rel="noreferrer">
              Picture HD
            </a>
          </div>
        </div>
      </Modal>
    </div>
  )
}
