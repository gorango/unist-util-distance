# unist-util-distance

[Unist](https://github.com/wooorm/unist) utility for finding the distance between nodes. Useful for working with [remark](https://github.com/wooorm/remark), [rehype](https://github.com/wooorm/rehype) and [retext](https://github.com/wooorm/retext).

## Install

```
npm install unist-util-distance
```

## Use

```js
import { u } from 'unist-builder'
import { inspect } from 'unist-util-inspect'
import { findDistance } from 'unist-util-distance'

const tree =
  u('root', [
    u('node', [
      u('leaf', 'leaf 0')
    ]),
    u('node', [
      u('node', [
        u('leaf', 'leaf 1'),
      ]),
      u('node', [
        u('leaf', 'leaf 2'),
        u('node', [
          u('leaf', 'leaf 3'),
        ])
      ])
    ]),
    u('leaf', 'leaf 4')
  ])

const nodeA = { value: 'leaf 0' }
const nodeB = { value: 'leaf 1' }]

console.log(inspect(findDistance(tree, nodeA, nodeB)))
```

Yields:

```
5
```

### API

#### `findDistance(tree, nodesToFind)`

Return the closest node that contains all `nodesToFind` along with `data.depth` containing the distance between the deepest node.

- `tree` ([`Parent`](https://github.com/wooorm/unist#parent)) - Unist node to search
- `nodeA` ([`Parent[]`](https://github.com/wooorm/unist#parent)) - First node
- `nodeB` ([`Parent[]`](https://github.com/wooorm/unist#parent)) - Second node

## Test

Run `npm test` to run tests.

Run `npm run coverage` to produce a test coverage report.
