"use strict";
const path = require("path");
const { h, Text } = require("ink");
const SelectInput = require("ink-select-input");
const opn = require("opn");

const open = url => opn(url, { wait: false });

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: "Website",
		url: "https://elzup.com"
	},
	{
		label: "Twitter",
		url: "https://twitter.com/_elzup_"
	},
	{
		label: "GitHub",
		url: "https://github.com/elzup"
	},
	{
		label: "Blog",
		url: "http://elzup.hatenablog.com/archive"
	},
	{
		label: "Qiet",
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br />
		<div>
			<Text>I’m a Web service developer.</Text>
		</div>
		<br />
		<SelectInput items={items} onSelect={handleSelect} />
	</div>
);
