const { crawlPage } = require("./crawl");

async function main() {
  if (process.argv.length < 3) {
    console.log("No website provided");
    process.exit(1);
  }
  // there should be exactly 3 commands in the terminal
  if (process.argv.length > 3) {
    console.log("Too many command line args");
    process.exit(1);
  }
  const baseURL = process.argv[2];
  console.log(`Starting crawl of ${baseURL}...`);
  const pages = await crawlPage(baseURL, baseURL, {});
  for (const page of Object.entries(pages)) {
    console.log(page);
  }
}

main();
