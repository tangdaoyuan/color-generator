import { hsl2rgb } from './convert'

const Hue = 310
const Saturation = 100
const Lightness = 50

const GREEN_TABLE = {
  virtualRange: [90, 105],
  span: 35,
  hueRange: [90, 140],
}
const BLUE_TABLE = {
  virtualRange: [185, 200],
  span: 15,
  hueRange: [220, 250],
}

function transformHue(virtualHue: number) {
  if (virtualHue < GREEN_TABLE.virtualRange[0])
    return virtualHue
  if (virtualHue > GREEN_TABLE.virtualRange[1] && virtualHue < BLUE_TABLE.virtualRange[0])
    return virtualHue + GREEN_TABLE.span
  if (virtualHue > BLUE_TABLE.virtualRange[1])
    return virtualHue + BLUE_TABLE.span + GREEN_TABLE.span
  if (virtualHue >= GREEN_TABLE.virtualRange[0] && virtualHue <= GREEN_TABLE.virtualRange[1]) {
    const hue = virtualHue - GREEN_TABLE.virtualRange[0]
    return GREEN_TABLE.hueRange[0]
      + Math.floor(hue * (GREEN_TABLE.hueRange[1] - GREEN_TABLE.hueRange[0]) / (GREEN_TABLE.virtualRange[1] - GREEN_TABLE.virtualRange[0]))
  }
  if (virtualHue >= BLUE_TABLE.virtualRange[0] && virtualHue <= BLUE_TABLE.virtualRange[1]) {
    const hue = virtualHue - BLUE_TABLE.virtualRange[0]
    return BLUE_TABLE.hueRange[0]
        + Math.floor(hue * (BLUE_TABLE.hueRange[1] - BLUE_TABLE.hueRange[0]) / (BLUE_TABLE.virtualRange[1] - BLUE_TABLE.virtualRange[0]))
  }

  return virtualHue
}

export function genColor(n: number) {
  const len = Math.floor(n)
  if (len <= 0)
    throw new Error('generated Colors count must be greater than 0')

  const span = Math.floor(Hue / len)

  return new Array(len).fill(0).map((_, i) => {
    let h = i * span
    h = transformHue(h)
    const s = Saturation
    const l = Lightness

    const [r, g, b] = hsl2rgb(h, s, l)
    return {
      r, g, b, h,
    }
  })
}

export function pickRandomColor(pick: number, n = 30) {
  if (pick > n)
    throw new Error('pick must be less than n')

  const colors = genColor(n)
  colors.sort(() => {
    return Math.random() > 0.5 ? 1 : -1
  })
  return colors.slice(0, pick)
}
