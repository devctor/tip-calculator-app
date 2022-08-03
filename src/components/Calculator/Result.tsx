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
    padding: 0.7rem 0.7rem;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    border-radius: .4rem;
  }
`

type TResult = {
  tip: number
  total: number
}
const Result = ({ tip, total }: TResult): JSX.Element => {
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
      <button>Reset</button>
    </ResultContainer>
  )
}

export default Result
