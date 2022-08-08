import styled from 'styled-components/macro'
import dollarIcon from '../../assets/icon-dollar.svg'
// import { useState } from 'react'

const InputContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin-inline: 2rem;
  div {
    position: relative;
  }
  span {
    position: absolute;
    top: 25%;
    width: 18px;
    height: 18px;
    background: url(${props => props.icon});
    background-repeat: no-repeat;
    left: 12px;
  }
  @media (min-width: 1200px) {
    &:first-child h3 {
      margin-block-start: 0;
    }
  }
`

const InputField = styled.input.attrs({
  type: 'text',
})`
  border: none;
  background: #f3f8fb;
  appearance: none;
  -moz-appearance: textfield;
  text-align: right;
  padding: .5rem .7rem;
  font-size: 24px;
  font-weight: 700;
  color: var(--veryDark);
  width: 100%;
`

type TInputText = {
  name: string
  icon: string
  title: string
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({ name, icon, title, handleValue }: TInputText): JSX.Element => {
  // const [bill, setBill] = useState()
  return (
    <InputContainer icon={icon}>
      <h3>{title}</h3>
      <div>
        <span></span>
        <InputField name={name} onChange={handleValue} />
      </div>
    </InputContainer>
  )
}

export default InputText
