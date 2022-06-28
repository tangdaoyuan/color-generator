import { hsl2rgb } from './convert'

const Hue = 360
const Saturation = 100
const Lightness = 50

export function genColor(n: number) {
  const len = Math.floor(n)
  if (len <= 0)
    throw new Error('generated Colors count must be greater than 0')

  const span = Math.floor(Hue / len)

  return new Array(len).fill(0).map((_, i) => {
    const h = i * span
    const s = Saturation
    const l = Lightness

    const [r, g, b] = hsl2rgb(h, s, l)
    return {
      r, g, b, h,
    }
  })
}
