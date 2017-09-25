// font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])))
// font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))
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
  `calc(${fontSize.min}px + ${(fontSize.max - fontSize.min)} * ((100vw - ${viewport.min}px) / ${viewport.max - viewport.min}))`
