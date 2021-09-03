import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Bahnschrift';
        src: url(db.onlinewebfonts.com/c/0a6ee448d1bd65c56f6cf256a7c6f20a?family=Bahnschrift) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
  />
)
