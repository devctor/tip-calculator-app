import styled from 'styled-components/macro'

type TContainer = {
  displayWarn?: boolean
}
const InputContainer = styled.div<TContainer>`
  display:flex;
  flex-direction: column;
  margin-inline: 2rem;
  div {
    position: relative;
    display: flex;
    align-items: center;
    background: #f3f8fb;
  }
  label {
    display: flex;
    flex-direction: column;
    .label-title {
      display: flex;
      font-weight: 700;
      margin-block: 1rem;
    }
    .label-validate {
      margin: 0;
      margin-inline-start: auto;
      color: tomato;
      display: ${p => p.displayWarn ? 'block' : 'none'};
    }
  }
  @media (min-width: 1200px) {
    margin-inline: 1rem;
    &:first-child label {
      margin-block-start: 0;
    }
  }
`

type TInputField = {
  icon: string
  displayWarn?: boolean
}
const InputField = styled.input.attrs({
  type: 'text',
  pattern: '[1-9][0-9.]*$',
  required: true
}) <TInputField>`
  border: none;
  background: #f3f8fb;
  background: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position:12px center;
  appearance: none;
  -moz-appearance: textfield;
  text-align: right;
  padding: .5rem .7rem;
  font-size: 24px;
  font-weight: 700;
  color: var(--veryDark);
  width: 100%;
  caret-color: var(--primary);
  position: relative;
  border-radius: 4px;
  outline: ${p => p.displayWarn ? '2px solid tomato' : '2px solid transparent'};

  &:focus-visible {
    transition: outline 70ms ease-in;
    outline: 2px solid var(--primary);

  }
  &:invalid {
  &:focus-visible {
    outline: 2px solid tomato;
  }
  }
`

type TInputText = {
  name: string
  icon: string
  title: string
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  warn?: boolean
}

const InputText = ({ name, icon, title, handleValue, warn }: TInputText): JSX.Element => {
  const focusInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // handleValue(e)
    if (e.target.value === '') {
      e.target.value = ''
    }
  }
  return (
    <InputContainer displayWarn={warn}>
      <label><span className="label-title">{title} <span className="label-validate">Can´t be zero</span></span>
        <InputField icon={icon} name={name} onFocus={focusInputHandler} onChange={handleValue} displayWarn={warn} />
      </label>
    </InputContainer>
  )
}

export default InputText
