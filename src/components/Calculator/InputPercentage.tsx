import styled from 'styled-components/macro'

const InputContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin-inline: 2rem;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  label {
    background: var(--veryDark);
    font-size: 24px;
    font-weight: 700;
    color: var(--white);
    flex: 1 0 calc(50% - 12px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-height: 50px;
    /* padding: .7rem .7rem; */
    border-radius: 4px;
    &:nth-last-child(-n+1) {
      padding: 0;
      input {
        height: 100%;
        border: none;
        text-align: right;
        padding: .5rem .7rem;
      }
    }
  /* &:focus-within { */
  /*   background-color: var(--primary); */
  /*   color: var(--veryDark); */
  /* } */
  }
  input[type="text"] {
    width: 100%;
    background: #f3f8fb;
    &::placeholder {
      color: var(--lightGrayish);
      font-weight: 700;
    }
  }

   @media (min-width: 1200px)  {
    label {
      padding: .5rem .5rem;
      max-height: 42px;
      flex: 1 0 calc(33.333% - 12px);
    }
    input[type="text"] {
      font-weight: 700;
      color: var(--veryDark);
      &::placeholder {
        font-size: 1.2rem;
      }
    }
    input[type="radio"] {
      color: red;
    }
  }
`

const InputField = styled.input.attrs({
  type: 'radio'
})`
  position: absolute;
  background: #f3f8fb;
  appearance: none;
  padding: .5rem .7rem;
  font-size: 24px;
  font-weight: 700;
  /* width: 100%; */
  z-index: 2;
  &:checked + p{
    position:absolute;
    background-color: var(--primary);
    color: var(--veryDark);
    width:100%;
    height:100%;
    z-index: 1;
    display: grid;
    place-items:center;
    border-radius: 4px;
  }
  &:focus {
    appearance: none;
  }
`

const handlerLabel = () => {
  console.log('label')
}
type TPercentage = {
  name: string
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
const InputPercentage = ({ name, handleValue }: TPercentage): JSX.Element => {
  const percentage = () => {
    const percentage = [5, 10, 15, 25, 50]
    return (
      percentage.map(p => {
        return (
          <label key={p}>
            <InputField name={name} value={p} onChange={e => { handleValue(e); handlerLabel() }} />
            <p>{p}%</p>
          </label>
        )
      })
    )
  }
  return (
    <InputContainer>
      <h3>Select tip %</h3>
      <div>
        {percentage()}
        <label>
          <input type="text" placeholder='Custom' name={name} onChange={handleValue} />
        </label>
      </div>
    </InputContainer >
  )
}

export default InputPercentage
