import { render, screen } from '@testing-library/react'

import { Reservation } from '@/components/reservations/Reservation'

describe('reservation page', () => {
  it('shows correct number of available seats', async () => {
    render(<Reservation showId={0} submitPurchase={jest.fn()} />)

    const seatCountText = await screen.findByText(/10 seats left/i)
    expect(seatCountText).toBeInTheDocument()
  })

  it('shows a "sold out" message if there are no tickets left ', async () => {
    render(<Reservation showId={1} submitPurchase={jest.fn()} />)

    const soldOutMessage = await screen.findByRole("heading", { name: /sold out/i })
    expect(soldOutMessage).toBeInTheDocument()

    const pruchaseBtn = screen.queryByRole("button", { name: /purchase/i })
    expect(pruchaseBtn).not.toBeInTheDocument()
  })
})