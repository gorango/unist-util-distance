import type { Parent, Node, Literal } from 'unist'

type NodeLike = Node | Parent | Literal

/**
 * Find distance between two nodes
 *
 * @param {Parent} tree - Root node
 * @param {NodeLike} nodeA - First node
 * @param {NodeLike} nodeB - Second node
 * @returns {number} - Distance between nodes
 */
export function findDistance(tree: Parent, nodeA: NodeLike, nodeB: NodeLike): number
