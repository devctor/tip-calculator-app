import { ReactNode } from 'react'
import styled from 'styled-components/macro'

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 2rem;
  background-color: var(--veryDark);
  color: var(--white);
  border-radius: .7rem;
  margin-block-end: 1rem;
  gap: 1rem;
  .resultRow {
    margin-inline: 1rem;
    display: flex;
    /* & .resultRow:first-child { */
    &:nth-child(1) {
      margin-block-start: 2rem;
    }
    &:nth-child(2) {
      margin-block-end: 2rem;
    }
    p {
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
      gap: .5rem;
      margin: 0;
      span {
        font-size: .8rem;
        color: rgb(158, 187, 189);
      }
    }
    .total {
      text-align: right;
      font-size: 1.7rem;
      color: var(--primary);
      font-weight: 700;
    }
  }

  button {
    background-color: var(--primary);
    color: var(--veryDark);
    margin-inline: 1rem;
    margin-block-end: 1rem;
    padding: 0.5rem 0.5rem;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    transition: background-color 90ms ease-out;
    &:hover {
      background-color: var(--veryLight);
    }
  }
  @media (min-width: 1200px) {
    padding-block: 1.5rem;
    gap: 2rem;
    .resultRow {
      &:nth-child(1) {
        margin-block-start: .5rem;
      }
      &:nth-child(2) {
        margin-block-end: .5rem;
      }
      .total {
      font-size: 2rem;
    }
    }
    button {
      margin-block-end: 0;
    }
  }
`

type TResult = {
  tip: string
  total: string,
  children: ReactNode
}

const Result = ({ tip, total, children }: TResult): JSX.Element => {
  return (
    <ResultContainer>
      <div className='resultRow'>
        <p>Tip amount <span>/ person</span></p>
        <p className='total'>${tip}</p>
      </div>
      <div className='resultRow'>
        <p>Total <span>/ person</span></p>
        <p className='total'>${total}</p>
      </div>
      {children}
    </ResultContainer>
  )
}

export default Result
