import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

describe('Header', () => {
  it('should show header with podcaster title', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const title = screen.getByText('header.title')
    expect(title).toBeInTheDocument()
  })

  it.todo('should navigate to home screen', () => {})
})
