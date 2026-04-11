/**
 * @typedef { import('unist').Node } Node
 * @typedef { import('unist').Parent } Parent
 * @typedef { import('unist').Literal } Literal
 */

import { visitParents } from 'unist-util-visit-parents'

/**
 * @typedef { Node | Parent | Literal } NodeLike
 */

/**
 * Find distance between two nodes
 *
 * @param {Parent} tree - Root node
 * @param {NodeLike} nodeA - First node
 * @param {NodeLike} nodeB - Second node
 * @returns {number} - Distance between nodes
 */
export function findDistance(tree, nodeA, nodeB) {
	if (!tree) {
		throw new Error('unist-util-distance requires a tree to search')
	}

	if (!nodeA || !nodeB) {
		throw new Error('unist-util-distance requires two nodes to find the distance')
	}

	if (nodeA === nodeB) return 0

	const paths = new Map()

	visitParents(tree, (node, ancestors) => {
		if (node === nodeA) paths.set(nodeA, [...ancestors, node])
		if (node === nodeB) paths.set(nodeB, [...ancestors, node])
	})

	if (paths.size !== 2) {
		throw new Error('unist-util-distance requires all nodes be contained in the tree')
	}

	const pathA = paths.get(nodeA)
	const pathB = paths.get(nodeB)

	if (pathA.includes(nodeB) || pathB.includes(nodeA)) return 0

	let lcaDepth = 0
	for (let i = 0; i < Math.min(pathA.length, pathB.length); i++) {
		if (pathA[i] === pathB[i]) lcaDepth = i + 1
	}

	return pathA.length + pathB.length - 2 * lcaDepth
}
