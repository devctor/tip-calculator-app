
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
    color: var(--white);
    flex: 1 0 calc(50% - 12px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: .7rem .7rem;
    border-radius: .4rem;
    &:nth-last-child(-n+1) {
      padding: 0;
      background: red;
      input {
        height: 100%;
        border: none;
        text-align: right;
        padding: .5rem .7rem;
      }
    }
  &:focus-within, &:checked+label {
    background-color: var(--primary);
    color: var(--veryDark);
  }
  }
  input[type="text"] {
    width: 100%;
    background: #f3f8fb;
    &::placeholder {
      color: var(--lightGrayish);
    }
  }

   @media (min-width: 1200px)  {
    label {
      flex: 1 0 calc(33.333% - 12px);
    }
  }
`

const InputField = styled.input.attrs({
  type: 'radio'
})`
  position: absolute;
  appearance: none;
  background: #f3f8fb;
  text-align: right;
  padding: .5rem .7rem;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
`

type TPercentage = {
  name: string
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputPercentage = ({ name, handleValue }: TPercentage): JSX.Element => {
  return (
    <InputContainer>
      <h3>Select tip %</h3>
      <div>
        <label> 5%</label>
        <InputField name={name} value={5} onChange={handleValue} />

        <label> 10%
          <InputField name={name} value={10} onChange={handleValue} />
        </label>
        <label> 15%
          <InputField name={name} value={15} onChange={handleValue} />
        </label>
        <label> 25%
          <InputField name={name} value={25} onChange={handleValue} />
        </label>
        <label> 50%
          <InputField name={name} value={50} onChange={handleValue} />
        </label>
        <label>
          <input type="text" placeholder='Custom' name={name} onChange={handleValue} />
        </label>
      </div>
    </InputContainer>
  )
}

export default InputPercentage
