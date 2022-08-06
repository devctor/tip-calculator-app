import { createGlobalStyle } from 'styled-components/macro'
import '@fontsource/space-mono'
import '@fontsource/space-mono/700.css'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *, *:before, *:after {
  box-sizing: border-box;
  }

  :root {
    --primary: hsl(172, 67%, 45%);
    
    --veryDark: hsl(183, 100%, 15%);
    --darkGrayish: hsl(186, 14%, 43%);
    --lightGrayish: hsl(184, 14%, 56%);
    --veryLight: hsl(185, 41%, 84%);
    --white: hsl(0, 0%, 100%);

    --font-body: "Space Mono";

  }
  body {
  background: var(--veryLight);
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  color: var(--darkGrayish);
  }

  h3 {
    font-size: 16px;
  }
`

export default GlobalStyle
