// font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])))
// font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))
export const strings = (
  {
    fontSize = {
      min: 17,
      max: 22
    },
    viewport = {
      min: 576,
      max: 1200
    }
  } = {}
) =>
  [
    `font-size: calc(${fontSize.min}px + ${(fontSize.max - fontSize.min)} * ((100vw - ${viewport.min}px) / ${viewport.max - viewport.min}));`,
    `
    @media screen and (max-width: ${viewport.min}px) {
      font-size: ${fontSize.min}px;
    }
    @media screen and (min-width: ${viewport.max}px) {
      font-size: ${fontSize.max}px
    }
    `
  ]

export const makeFluid = (
  {
    targetElementSelector = `html`,
    fontSize = {
      min: 17,
      max: 22
    },
    viewport = {
      min: 576,
      max: 1200
    }
  } = {}
) => {
  const target = document.querySelector(targetElementSelector)
  const fluid = `calc(${fontSize.min}px + ${(fontSize.max - fontSize.min)} * ((100vw - ${viewport.min}px) / ${viewport.max - viewport.min}))`
  const lowerLimit = window.matchMedia(`(max-width: ${viewport.min}px)`)
  const upperLimit = window.matchMedia(`(min-width: ${viewport.max}px)`)
  const handleLimitChange = () => {
    if (lowerLimit.matches) {
      target.style.fontSize = `${fontSize.min}px`
    } else if (upperLimit.matches) {
      target.style.fontSize = `${fontSize.max}px`
    } else {
      target.style.fontSize = fluid
    }
  }
  lowerLimit.addListener(handleLimitChange)
  upperLimit.addListener(handleLimitChange)
  handleLimitChange()
  return () => {
    lowerLimit.removeListener(handleLimitChange)
    upperLimit.removeListener(handleLimitChange)
  }
}
