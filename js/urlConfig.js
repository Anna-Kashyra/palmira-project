const isInnerPage =
  window.location.pathname.includes("/html/") ||
  window.location.pathname.includes("\\html\\");

const prefix = isInnerPage ? "../" : "";