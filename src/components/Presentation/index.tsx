import styled from 'styled-components/macro'
import Calculator from '../Calculator'
import logo from '../../assets/logo.svg'

const Main = styled.main`
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    letter-spacing: .7rem;
    width: 150px;
    word-break: break-word;
    margin: 0 auto;
    font-size: 2rem;
    margin-block: 2rem;
  }
  img {
    margin: 2em auto;
    display: block;
  }
`
const Presentation = (): JSX.Element => {
  return (
    <Main>
      <img src={logo} alt='Logo image' />
      <Calculator />
    </Main>
  )
}

export default Presentation
