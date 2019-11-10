import React, { useState, useEffect, useRef } from "react"
import { throttle } from "lodash"

import { StyledBtn } from "./scroll-top-btn.styles"

const ScrollTopBtn = () => {
  const [visible, setVisible] = useState(false)
  const btn = useRef(null)
  const checkVisible = () => {
    if (window.pageYOffset > 500) setVisible(true)
    else setVisible(false)
  }
  const handler = throttle(checkVisible, 500)

  useEffect(() => {
    window.addEventListener("scroll", handler)
    return () => {
      window.removeEventListener("scroll", handler)
    }
  })

  return (
    <StyledBtn href="#top" ref={btn} visible={visible}>
      &#8593;
    </StyledBtn>
  )
}

export default ScrollTopBtn
