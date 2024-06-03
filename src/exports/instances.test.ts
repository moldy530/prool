import { expect, test } from 'vitest'
import * as exports from './instances.js'

test('exports', () => {
  expect(Object.keys(exports)).toMatchInlineSnapshot(`
    [
      "anvil",
    ]
  `)
})
