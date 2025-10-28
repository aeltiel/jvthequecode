/*
 tests/navbar.test.js
*/

jest.mock('next/link', () => {
  const React = require('react')
  const Link = ({ href, children }) => {
    return React.createElement('a', { href }, children)
  }
  Link.displayName = 'Link'
  return Link
})

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import Navbar from '../src/app/component/navbar'

afterEach(cleanup)

describe('Navbar component', () => {
  test('renders a navigation element', () => {
    render(React.createElement(Navbar))
    const nav = screen.getByRole('navigation')
    expect(nav).toBeTruthy()
  })

  test('renders links with correct text and hrefs', () => {
    render(React.createElement(Navbar))

    const accueil = screen.getByText('Accueil')
    const profil = screen.getByText('Mon Profil')
    const collection = screen.getByText('Collection')

    expect(accueil).toBeInTheDocument()
    expect(accueil.closest('a')).toHaveAttribute('href', '/')

    expect(profil).toBeInTheDocument()
    expect(profil.closest('a')).toHaveAttribute('href', '/profil')

    expect(collection).toBeInTheDocument()
    expect(collection.closest('a')).toHaveAttribute('href', '/collection')
  })

  test('matches snapshot', () => {
    const { asFragment } = render(React.createElement(Navbar))
    expect(asFragment()).toMatchSnapshot()
  })
})