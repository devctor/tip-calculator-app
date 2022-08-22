import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import InputPercentage from './InputPercentage'
import InputText from './InputText'
import dollarIcon from '../../assets/icon-dollar.svg'
import personIcon from '../../assets/icon-person.svg'
import Result from './Result'

const CalcContainer = styled.div`
  background: var(--white);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  gap: 1rem;
  & > :last-child {
    margin-block-end: 1rem;
  }
   @media (min-width: 1200px)  {
    flex-direction:row;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 1rem;
    padding: 2rem;
    .inputs {
      flex: 0 0 50%;
    }
    & > div:nth-child(2) {
      flex: 0 1 50%;
      margin: 0;
      button {
        margin-block-start: auto;
      }
  }
  }
`
type TCalculatorData = {
  totalBill: number
  percentage: number
  numberPeople: number
  tipPerPerson?: number
  totalSplit?: number
}

/**
* 142.55 * (15/100) / 5 Total Tip = Bill Amount × (Tip Percentage / 100)
* 142.55 / 5 + 4.27 | totalBill / numberPeople + tipPerPerson
*/

const Calculator = (): JSX.Element => {
  const [calc, setCalc] = useState<TCalculatorData>({
    totalBill: 0,
    percentage: 0,
    numberPeople: 0
  })

  const custom = document.getElementById('custom')
  // Maybe use a state to mange focus on custom text input for percentages
  const [tipPerPerson, setTipPerPerson] = useState<number>(0)
  const [totalSplit, setTotalSplit] = useState<number>(0)
  const [reset, setReset] = useState<boolean>(false)
  const [focus, setfocus] = useState(false)
  const [warnNumPeople, setWarnNumPeople] = useState(false)

  const formRef = useRef<React.MutableRefObject<boolean | null>>(null)

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/

    // if value is not blank, then test the regex

    // if (re.test(e.target.value)) {
    setCalc({
      ...calc,
      [e.target.name]: e.target.value
    })
    // }
  }

  const handleReset = () => {
    setReset(!reset)
  }

  useEffect(() => {
    console.log('calc', calc)
    if (calc.numberPeople >= 1) {
      setWarnNumPeople(false)
      setTipPerPerson(calc.totalBill * (calc.percentage / 100) / calc.numberPeople)
      setTotalSplit((calc.totalBill / calc.numberPeople) + tipPerPerson!)
    }

    if (calc.numberPeople === '') {
      console.log('numberPeople empty:')
      setTipPerPerson(0)
      setTotalSplit(0)
      setWarnNumPeople(true)
    }
    // if (calc.numberPeople.length === 0 || calc.numberPeople === 0) {
    //   console.log('empty or 0 input')
    //   setCalc({
    //     ...calc,
    //     numberPeople: 1
    //   })
    // }

    console.log(reset, 'reset')
    if (reset) {
      formRef.current.reset()
      setCalc({
        totalBill: 0,
        percentage: 0,
        numberPeople: 0
      })
      setReset(false)
      setWarnNumPeople(false)
      setTipPerPerson(0)
      setTotalSplit(0)
    }
    setWarnNumPeople(false)

    if (calc.totalBill > 0 && calc.percentage > 0) {
      setWarnNumPeople(true)
      console.log('show warn in num of people ', warnNumPeople)
    }
  }, [calc, tipPerPerson, totalSplit, reset, warnNumPeople])

  useEffect(() => {
    custom?.addEventListener('focus', () => {
      console.log('focust from parent')
      setfocus(!focus)
      setCalc({
        ...calc,
        percentage: 0
      })
    })

  }, [focus, calc])

  return (
    <CalcContainer>
      <div className='inputs'>
        <form ref={formRef}>
          <InputText name='totalBill' icon={dollarIcon} title='Bill' handleValue={handleInputText} reset={reset} />
          <InputPercentage reset={reset} name='percentage' handleValue={handleInputText} />
          <InputText name='numberPeople' icon={personIcon} title='Number of people' handleValue={handleInputText} warn={warnNumPeople} />
        </form>
        {warnNumPeople ? 'true' : 'false'}
      </div>
      <Result tip={tipPerPerson!.toFixed(2)} total={totalSplit!.toFixed(2)}>
        <button onClick={handleReset}>Reset</button>
      </Result>
    </CalcContainer>
  )
}

export default Calculator
