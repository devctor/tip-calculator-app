import styled from 'styled-components/macro'
import Calculator from '../Calculator'
import logo from '../../assets/logo.svg'

const Main = styled.main`
  img {
    margin: 2em auto;
    display: block;
  }
`
const Presentation = (): JSX.Element => {
  return (
    <Main>
      <h1>
        <img src={logo} alt='Logo image' />
      </h1>
      <Calculator />
    </Main>
  )
}

export default Presentation
