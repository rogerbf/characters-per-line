export default (
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
  `calc(${fontSize.min +
    (fontSize.max -
      fontSize.min)} * ((100vw - ${viewport.min}px) / ${viewport.max -
    viewport.min}px))`
