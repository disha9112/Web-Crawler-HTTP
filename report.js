function printReport(pages) {
  console.log("===========");
  console.log("REPORT");
  console.log("===========");
  const sortedPages = sortPages(pages);
  for (const sortedPage of sortedPages) {
    const url = sortedPage[0];
    const freq = sortedPage[1];
    console.log(`Found ${freq} links to page: ${url}`);
  }
  console.log("===========");
  console.log("END REPORT");
  console.log("===========");
}

// sort the URLs from highest to lowest occurrence
function sortPages(pages) {
  const pagesArr = Object.entries(pages);
  // sort by occurrence
  pagesArr.sort((a, b) => {
    aHits = a[1];
    bHits = b[1];
    return b[1] - a[1];
  });
  return pagesArr;
}

module.exports = {
  printReport,
  sortPages,
};
