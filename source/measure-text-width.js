export default (
  {
    text = ``,
    fontFamily,
    fontSize,
    height,
    width,
    canvas = document.createElement(`canvas`)
  } = {}
) => {
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext(`2d`)
  context.font = `${fontSize} ${fontFamily}`

  return context.measureText(text).width
}
