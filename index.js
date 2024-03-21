/**
 * @typedef { import('unist').Node } Node
 * @typedef { import('unist').Parent } Parent
 * @typedef { import('unist').Literal } Literal
 */

import { is } from 'unist-util-is'
import { EXIT, visitParents } from 'unist-util-visit-parents'
import findAncestor from 'unist-util-ancestor'

/**
 * @typedef { Node | Parent | Literal } NodeLike
 */

/**
 * Find distance between two nodes
 *
 * @param {Parent} tree - Root node
 * @param {NodeLike} nodeA - First node
 * @param {NodeLike} nodeB - Second node
 * @returns {number} - Ancestor Parent with data.depth
 */
export function findDistance(tree, nodeA, nodeB) {
	if (!tree) {
		throw new Error('unist-util-distance requires a tree to search')
	}

	if (!nodeA || !nodeB) {
		throw new Error('unist-util-distance requires two nodes to find the distance')
	}

	const nodesToFind = [nodeA, nodeB]
	const ancestor = findAncestor(tree, nodesToFind, true)

	const rootNode = nodesToFind.find(node => is(node, ancestor))
	if (rootNode) {
		return ancestor.data?.depth || 0
	}

	let a = 0
	let b = 0
	visitParents(ancestor, (node, ancestors) => {
		if (a && b) {
			return EXIT
		}
		if (is(node, nodeA)) {
			a = ancestors.length
		}
		if (is(node, nodeB)) {
			b = ancestors.length
		}
	})

	return a + b
}
