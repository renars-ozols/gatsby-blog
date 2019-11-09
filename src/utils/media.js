import { css } from "styled-components"
const sizes = {
  desktop: 90,
  laptop: 64,
  tablet: 48,
}
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})
