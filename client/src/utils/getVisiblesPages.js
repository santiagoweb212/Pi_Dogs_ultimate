 export const getVisiblePages = (current, pages, windowSize) => {
  console.log("parametro", { current, pages, windowSize });
  let visiblePages = [];
  let start = current - Math.floor(windowSize / 2);
  let end = current + Math.floor(windowSize / 2);
  console.log({ start, end });
  if (start < 1) {
    end += 1 - start;
    start = 1;
  }
  if (end > pages.length) {
    start -= end - pages.length;
    end = pages.length;
  }
  for (let i = start; i <= end; i++) {
    visiblePages.push(i);
  }
  if (start > 1) {
    visiblePages.unshift(1, "...");
  }
  if (end < pages.length) {
    visiblePages.push("...", pages.length);
  }
  console.log(visiblePages);
  return visiblePages;
};
