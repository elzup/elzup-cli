const execa = require("execa");

it("display items", async () => {
	const result = await execa.shell("source/cli.js", { input: "\n" });
	expect(result.stdout).toMatch(/Website/);
	expect(result.stdout).toMatch(/Twitter/);
	expect(result.stdout).toMatch(/GitHub/);
	expect(result.stdout).toMatch(/Blog/);
	expect(result.stdout).toMatch(/Quit/);
});
