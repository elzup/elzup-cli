'use strict'

const React = require('react')
const { Box, Text } = require('ink')
const SelectInput = require('ink-select-input').default
const open = require('open')

const handleSelect = item => {
	if (item.url) {
		open(item.url)
	}

	if (item.action) {
		item.action()
	}
}

const items = [
	{
		label: 'Website',
		url: 'https://elzup.com',
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/_elzup_',
	},
	{
		label: 'GitHub',
		url: 'https://github.com/elzup',
	},
	{
		label: 'Blog',
		url: 'http://elzup.hatenablog.com/archive',
	},
	{
		label: 'Quit',
		action() {
			process.exit()
		},
	},
]

const addKeys = items => {
	for (const item of items) {
		item.key = item.url || item.label
	}
	return items
}

module.exports = () => (
	<Box flexDirection="column">
		<Box marginBottom={1}>
			<Text>I’m a Web service developer.</Text>
		</Box>
		<SelectInput items={addKeys(items)} onSelect={handleSelect} />
	</Box>
)
