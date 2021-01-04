import axios from "axios"
import { selector } from "recoil"
import { dateState } from "./atoms"

export const selectPictureAndDescribe = selector({
  key: "get-data-nasa",
  get: async ({ get }) => {
    try {
      const date = get(dateState)

      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=fUWyECiO38yLqpNKX8bwi6mlCo3lWiGHERnwpKdH`
      )

      return response.data
    } catch (err) {
      console.error({ error: err })
    }
  },
})
