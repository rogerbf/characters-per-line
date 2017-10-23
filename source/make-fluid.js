export const makeFluid = (
  {
    targetElement = `html`,
    fontSize = {
      min: 17,
      max: 22
    },
    width = {
      min: 576,
      max: 1200
    }
  } = {}
) => {
  const target = targetElement.constructor.name === `String` ? document.querySelector(targetElement) : targetElement

  const lowerLimit = window.matchMedia(`(max-width: ${width.min}px)`)
  const upperLimit = window.matchMedia(`(min-width: ${width.max}px)`)

  const handleLimitChange = () => {
    if (lowerLimit.matches) {
      target.style.fontSize = `${fontSize.min}px`
    } else if (upperLimit.matches) {
      target.style.fontSize = `${fontSize.max}px`
    } else {
      target.style.fontSize = `calc(${fontSize.min}px + ${(fontSize.max - fontSize.min)} * ((100vw - ${width.min}px) / ${width.max - width.min}))`
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
