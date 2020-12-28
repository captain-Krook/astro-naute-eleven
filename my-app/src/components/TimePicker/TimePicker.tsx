import { TextField } from "@material-ui/core"
import React from "react"
import { useSetRecoilState } from "recoil"
import { dateState } from "../../store/atoms"

export const TimePicker = (): JSX.Element => {
  const dateToday: string = new Date().toISOString().slice(0, 10)
  const setSelectedDate = useSetRecoilState(dateState)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSelectedDate(e.target.value)
  }

  return (
    <TextField
      id="date"
      label="Select a date"
      type="date"
      defaultValue={dateToday}
      onChange={(e): void => handleChange(e)}
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
