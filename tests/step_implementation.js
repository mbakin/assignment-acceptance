const path = require("path");
const {
  openBrowser,
  write,
  closeBrowser,
  goto,
  press,
  screenshot,
  above,
  click,
  focus,
  checkBox,
  listItem,
  toLeftOf,
  link,
  text,
  into,
  textBox,
  evaluate,
} = require("taiko");
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === "true";

beforeSuite(async () => {
  await openBrowser({
    headless: headless,
  });
});

afterSuite(async () => {
  await closeBrowser();
});

step("Go to local server", async () => {
  await goto("http://localhost:3000/")
});

step("Test header contains Welcome User! text", async () => {
  assert.ok(await text("Welcome User!").exists());
});

step("Test header contains Your Tasks  text", async () => {
    assert.ok(await text("Your Tasks").exists());
  });

step("When I write <item> to text box", async (item) => {
    await write("Test Automated", into(textBox({id:"todoInputId"})))
})

step("Click create button", async () => {
    await click('CREATE TASK');
});

step("TodoList contains <item>", async (item) => {
    assert.ok(await listItem(item).exists());
});