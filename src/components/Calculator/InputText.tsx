import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import dollarIcon from '../../assets/icon-dollar.svg'
// import { useState } from 'react'

const InputContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin-inline: 2rem;
    &.not-valid h3 p {
      display: block;
    }
    &.not-valid input {
      outline: 2px solid red;
    }
  div {
    position: relative;
    display: flex;
    align-items: center;
    background: #f3f8fb;
  }
  h3 {
    display: flex;
    p {
      margin: 0;
      margin-inline-start: auto;
      color: red;
      display: none;
    }
  }
  @media (min-width: 1200px) {
    &:first-child h3 {
      margin-block-start: 0;
    }
  }
`

type TInputField = {
  icon: string
}
const InputField = styled.input.attrs({
  type: 'text',
  pattern: '[1-9][0-9]*$',
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
  &:focus-visible {
    transition: outline 70ms ease-in;
    outline: 2px solid var(--primary);
  }
  &:invalid {
  &:focus-visible {
    outline: 2px solid red;
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
  // const [bill, setBill] = useState()
  const [value, setValue] = useState<number>()
  useEffect(() => {
    console.log('warninf from input', warn)
  }, [warn])

  const changeValue = (e) => {

    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex
    console.log(e.currentTarget.validity.valid, 'eee', e.target.value.length)
    if (e.target.value === '0' || e.target.value.length === 0) {
      e.currentTarget.parentElement?.parentElement.classList.add('not-valid')
      console.log('0000j jw')
    } else {
      e.currentTarget.parentElement?.parentElement.classList.remove('not-valid')
    }

    // if (re.test(e.target.value)) {
    //   setValue(e.target.value)
    // }
  }
  return (
    <InputContainer className={warn ? 'not-valid' : null}>
      <h3>{title} <p>Can´t be zero</p></h3>

      <div>
        <InputField icon={icon} name={name} onChange={(e) => { handleValue(e), changeValue(e) }} />
      </div>
    </InputContainer>
  )
}

export default InputText
