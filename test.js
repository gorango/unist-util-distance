import test from 'tape'
import { u } from 'unist-builder'
import { find } from 'unist-util-find'
import { findDistance } from './index.js'

const tree
	= u('root', [
		u('node', { id: 1 }, [
			u('node', { id: 2 }, [
				u('leaf', 'leaf 0'),
			]),
		]),
		u('node', { id: 3 }, [
			u('node', { id: 4 }, [
				u('leaf', 'leaf 1'),
				u('leaf', 'leaf 2'),
			]),
			u('node', { id: 5 }, [
				u('leaf', 'leaf 3'),
				u('node', { id: 6 }, [
					u('leaf', 'leaf 4'),
					u('leaf', 'leaf 5'),
				]),
			]),
			u('leaf', 'leaf 6'),
		]),
	])

test('throws useful errors', (t) => {
	t.throws(() => {
		// @ts-expect-error runtime
		findDistance()
	}, 'should fail without tree')

	t.throws(() => {
		// @ts-expect-error runtime
		findDistance(tree)
	}, 'should fail without nodes')

	t.throws(() => {
		// @ts-expect-error runtime
		findDistance(tree, [])
	}, 'should fail with empty nodes')

	t.throws(() => {
		// @ts-expect-error runtime
		findDistance(
			tree,
			{ type: 'leaf', value: 'leaf 55' }
		)
	}, 'should fail with non-existent node')

	t.throws(() => {
		findDistance(
			tree,
			// @ts-expect-error runtime
			{ type: 'leaf', value: 'leaf 5' },
			{ type: 'leaf', value: 'leaf 53' },
		)
	}, 'should fail with non-existent nodes')

	t.end()
})

test('should find distance between two nodes', (t) => {
	const actual = findDistance(
		tree,
		// @ts-expect-error find could return undefined
		find(tree, { value: 'leaf 0' }),
		find(tree, { value: 'leaf 1' }),
	)
	t.equal(actual, 6)
	t.end()
})
