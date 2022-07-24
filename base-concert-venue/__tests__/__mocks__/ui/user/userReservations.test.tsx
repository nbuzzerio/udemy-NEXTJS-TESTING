import { render, screen } from "@testing-library/react"

import { UserReservations } from "@/components/user/UserReservations"

describe('userReservations page', () => {
  it('should show the user\'s reservations', async () => {
    render(<UserReservations userId={1} />)

    const pruchaseBtn = await screen.findByText(/purchase more tickets/i)
    expect(pruchaseBtn).toBeInTheDocument()
  })

  it('should show the user\'s has no reservations', async () => {
    render(<UserReservations userId={0} />)

    const pruchaseBtn = await screen.findByText(/purchase tickets/i)
    expect(pruchaseBtn).toBeInTheDocument()

    const yourTickets = await screen.queryByRole("heading", { name: /your tickets/i })
    expect(yourTickets).not.toBeInTheDocument()
  })
})