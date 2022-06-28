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
        "h": 72,
        "r": 204,
      },
      {
        "b": 102,
        "g": 255,
        "h": 144,
        "r": 0,
      },
      {
        "b": 255,
        "g": 102,
        "h": 216,
        "r": 0,
      },
      {
        "b": 255,
        "g": 0,
        "h": 288,
        "r": 204,
      },
    ]
  `)
})
