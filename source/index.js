import measureTextWidth from "./measure-text-width"
import calculateRatio from "./calculate-ratio"

export const setFontSize = ({ element = document.createElement(`div`), size = 0 }) =>
window.requestAnimationFrame(() => {
  element.style.fontSize = `${size}px`
})

export const calculateFontSize = (
  {
    container = document.createElement(`div`),
    text = container.textContent.trim()
  } = {}
) => {
  const { width, height } = container
  const { fontFamily, fontSize } = window.getComputedStyle(container)

  return (
    parseInt(fontSize) *
    calculateRatio(
      container.offsetWidth,
      measureTextWidth({
        width,
        height,
        fontFamily,
        fontSize,
        text
      })
    )
  )
}
