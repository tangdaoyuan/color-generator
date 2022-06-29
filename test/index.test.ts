import { expect, it } from 'vitest'
import { genColor } from '@'

it('runs', () => {
  expect(genColor(5)).toMatchInlineSnapshot(`
    [
      {
        "b": 0,
        "g": 0,
        "h": 0,
        "r": 255,
      },
      {
        "b": 0,
        "g": 255,
        "h": 62,
        "r": 246,
      },
      {
        "b": 166,
        "g": 255,
        "h": 159,
        "r": 0,
      },
      {
        "b": 255,
        "g": 76,
        "h": 222,
        "r": 0,
      },
      {
        "b": 255,
        "g": 0,
        "h": 298,
        "r": 246,
      },
    ]
  `)
})
