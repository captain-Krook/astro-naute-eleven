import { render } from "@testing-library/react"
import React from "react"
import { Popin } from "./Popin"
import { cleanup, fireEvent, waitFor } from "@testing-library/react"

afterEach(cleanup)

describe("Popin", () => {
  test("should open modal if click on button", async (): void => {
    const { getByText, getByTestId } = render(<Popin />)
    const labelButton = getByText(/Find out more/i)

    fireEvent.click(labelButton)
    await waitFor(() => {
      const modal = getByTestId("modal")
      expect(modal).toBeInTheDocument()
    })
  })
})
