import { css } from "styled-components"
const sizes = {
  laptop: 56.25,
  tablet: 37.5,
}
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})
