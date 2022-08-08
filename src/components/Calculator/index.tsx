import { useState, useEffect, useRef } from 'react'
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
    numberPeople: 1
  })

  const [tipPerPerson, setTipPerPerson] = useState<number>(0)
  const [totalSplit, setTotalSplit] = useState<number>(0)
  const [reset, setReset] = useState<boolean>(false)

  const formRef = useRef(null)

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (e.target.name === 'numberPeople') {
    //   console.log(e.target.value)
    //   if (e.target.value.length === 0) {
    //     console.log('empty')
    //     setCalc({
    //       ...calc,
    //       ['numberPeople']: 1
    //     })
    //   }
    // }
    setCalc({
      ...calc,
      [e.target.name]: e.target.value
    })
  }

  const handleReset = () => {
    console.log('button')
    setReset(!reset)
  }

  useEffect(() => {
    console.log('useEffect', calc)

    // if (calc.numberPeople === 0) {
    //   console.log('empty effect')
    // }
    if (calc.numberPeople >= 1) {
      setTipPerPerson(calc.totalBill * (calc.percentage / 100) / calc.numberPeople)
      setTotalSplit((calc.totalBill / calc.numberPeople) + tipPerPerson!)
    }
    if (calc.numberPeople === '') {
      console.log('empty')
      setCalc({
        ...calc,
        numberPeople: 1
      })
    }

    if (reset) {
      formRef.current.reset()
      setCalc({
        totalBill: 0,
        percentage: 0,
        numberPeople: 1
      })
      setReset(false)
    }
  }, [calc, tipPerPerson, totalSplit, reset])

  return (
    <CalcContainer>
      <div className='inputs'>
        <form ref={formRef}>
          <InputText name='totalBill' icon={dollarIcon} title='Bill' handleValue={handleInputText} />
          <InputPercentage name='percentage' handleValue={handleInputText} />
          <InputText name='numberPeople' icon={personIcon} title='Number of people' handleValue={handleInputText} />
        </form>
      </div>
      <Result tip={tipPerPerson!.toFixed(2)} total={totalSplit!.toFixed(2)}>
        <button onClick={handleReset}>Reset</button>
      </Result>
    </CalcContainer>
  )
}

export default Calculator
