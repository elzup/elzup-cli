#!/usr/bin/env node
"use strict";
const path = require("path");
const React = require("react");
const meow = require("meow");
const termImg = require("term-img");
const terminalImage = require("terminal-image");
const importJsx = require("import-jsx");
const { render } = require("ink");

const ui = importJsx("./ui");

meow(`
	Usage
	  $ elzup
`);

const fallback = async () => {
	const image = await terminalImage.file(path.join(__dirname, "avatar.png"));

	console.log(image);
};

termImg(path.join(__dirname, "avatar.png"), { fallback });

render(React.createElement(ui));
