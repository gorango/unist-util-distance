# unist-util-distance

[![Coverage][coverage-badge]][coverage]
[![Types][types-badge]][types]
[![Size][size-badge]][size]

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
const nodeB = { value: 'leaf 1' }

console.log(inspect(findDistance(tree, nodeA, nodeB)))
```

Yields:

```
5
```

### API

#### `findDistance(tree, nodeA, nodeB)`

Return the distance between two nodes.

- `tree` ([`Parent`](https://github.com/wooorm/unist#parent)) - Unist tree to search
- `nodeA` ([`Node`](https://github.com/wooorm/unist#node)) - First node
- `nodeB` ([`Node`](https://github.com/wooorm/unist#node)) - Second node

Returns a `number` representing the distance (number of edges) between the nodes. Returns `0` if nodes are the same or one is an ancestor of the other.

## Test

Run `npm test` to run tests.

Run `npm run coverage` to produce a test coverage report.

## License

[MIT][license] © [Goran Spasojevic][author]

<!-- Definitions -->

[coverage-badge]: https://img.shields.io/codecov/c/github/gorango/unist-util-distance.svg
[coverage]: https://codecov.io/github/gorango/unist-util-distance
[types-badge]: https://badgen.net/npm/types/unist-util-distance
[types]: https://www.npmjs.com/package/unist-util-distance
[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-distance.svg
[size]: https://bundlephobia.com/result?p=unist-util-distance
[license]: license
[author]: https://github.com/gorango
