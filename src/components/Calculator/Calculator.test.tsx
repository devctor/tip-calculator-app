import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { test, expect, beforeEach, describe } from 'vitest'
import Calculator from '.'

beforeEach(() => {
  render(<Calculator />)
})

describe('<Calculator />', async () => {
  test('Calculator bill input label', () => {
    expect(screen.getByText('Bill')).toBeTruthy()
  })

  test('Calculator bill input select tip', () => {
    expect(screen.getByText('Select tip %')).toBeTruthy()
    expect(screen.getByText('5%')).toBeTruthy()
    expect(screen.getByText('10%')).toBeTruthy()
    expect(screen.getByText('15%')).toBeTruthy()
    expect(screen.getByText('25%')).toBeTruthy()
    expect(screen.getByText('50%')).toBeTruthy()
    expect(screen.queryByPlaceholderText(/Custom/i)).toBeDefined()
  })

  test('Input: Number of people', () => {
    expect(screen.getByText(/number of people/i)).toBeTruthy()
  })

  test('Result section', () => {
    expect(screen.getByText(/tip amount/i)).toBeTruthy()
    expect(screen.getByText(/total/i)).toBeTruthy()
    expect(screen.getAllByText(/\/ person/i)).toBeTruthy()
    expect(screen.getByText(/reset/i)).toBeTruthy()
  })
  test('calculations', () => {
    expect(false).toBeFalsy()
  })

})
