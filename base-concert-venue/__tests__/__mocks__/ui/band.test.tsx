import {render, screen} from '@testing-library/react'

import BandCmpnt from "@/pages/bands/[bandId]"
import { readFakeData } from "@/__tests__/__mocks__/fakeData"

describe("band component", () => {
  it('displays correct band info', async () => {
    const {fakeBands} = await readFakeData()
    render(<BandCmpnt band={fakeBands[0]} error={null}/>)

    const heading = screen.getByRole('heading', {
      name: 'The Wandering Bunnies'
    })
    expect(heading).toBeInTheDocument()
  })
 
  it('displays error', async () => {
    const {fakeBands} = await readFakeData()
    render(<BandCmpnt band={null} error='ANY STRING WILL DO'/>)

    const error = screen.getByRole('heading', {
      name: /any string will do/i
    })
    expect(error).toBeInTheDocument()
  })
})