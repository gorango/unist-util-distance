import type { Parent, Node } from 'unist'

/**
 * Find distance between two nodes
 *
 * @param {Parent} tree - Root node
 * @param {Node} nodeA - First node
 * @param {Node} nodeB - Second node
 * @returns {number} - Distance between nodes
 */
export function findDistance(tree: Parent, nodeA: Node, nodeB: Node): number
