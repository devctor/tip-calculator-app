import React, { useState, useRef } from 'react'
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
  }
  .customInput {
    background: none;
  }
  input[type="text"] {
    width: 100%;
    background: #f3f8fb;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 700;
    &::placeholder {
      color: var(--lightGrayish);
      font-weight: 700;
    }
    &:focus-visible {
      outline: 2px solid var(--primary);
    }
    &:invalid {
      &:focus-visible {
        outline: 2px solid tomato;
      }
    }
  }

   @media (min-width: 1200px)  {
    margin-inline: 1rem;
    label {
      padding: .5rem .5rem;
      max-height: 42px;
      flex: 1 0 calc(33.333% - 12px);
      transition: background-color 90ms ease-out;
      &:hover {
        background-color: var(--veryLight);
        color: var(--veryDark);
      }
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

type TPercentage = {
  name: string
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputPercentage = ({ name, handleValue }: TPercentage): JSX.Element => {
  const inputPercentageRef = useRef<Array<HTMLInputElement | null>>([])
  const [selected, setSelected] = useState<number>()
  const percentageArr = [5, 10, 15, 25, 50]

  const handlerLabel = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.table(e.currentTarget.value)
    const indexSelected = percentageArr.indexOf(parseInt(e.currentTarget.value))
    const customElement = document.getElementById('custom') as HTMLInputElement
    customElement!.value = ''
    setSelected(indexSelected)
    handleValue(e as any)
  }

  const handleCustom = () => {
    if (selected! >= 0) {
      inputPercentageRef.current[selected as number]!.checked = false
    }
  }

  const percentage = () => {
    return (
      percentageArr.map((p, i) => {
        return (
          <label key={p}>
            <InputField ref={el => (inputPercentageRef.current[i] = el)} name={name} value={p} onClick={handlerLabel} />
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
        <label className="customInput">
          <input type="text" id="custom" required pattern='[0-9][0-9]*$' placeholder='Custom' name={name} onFocus={handleCustom} onChange={handleValue} />
        </label>
      </div>
    </InputContainer >
  )
}

export default InputPercentage
