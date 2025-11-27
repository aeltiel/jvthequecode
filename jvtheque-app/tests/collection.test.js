import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Page from '../src/app/collection/page'

afterEach(cleanup)

describe('Page Collection', () => {
  test('est accessible et affiche le texte attendu', () => {
    render(<Page />)
    expect(screen.getByText('Bienvenue dans ta collection !')).toBeInTheDocument()
  })
})