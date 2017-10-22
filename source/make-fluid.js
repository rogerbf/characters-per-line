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
