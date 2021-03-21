const http = require("http");
const cluster = require("cluster");
const puppeteer = require("puppeteer");
const Koa = require("koa");

const app = new Koa();

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://example.com");
//   await page.screenshot({ path: "example.png" });
//
//   await browser.close();
// })();

// response
app.use((ctx) => {
  ctx.body = "Hello Koa";
});

for (const id in cluster.workers) {
  console.log(cluster.workers[id]);
}

app.listen(3000);
