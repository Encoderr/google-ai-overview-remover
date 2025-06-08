
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    const query = url.searchParams.get("q");
    
    if (query && !query.includes("-ai")) {
      // Modifying query by adding "-ai"
      url.searchParams.set("q", `${query} -ai`);
      return { redirectUrl: url.toString() };
    }
  },
  { urls: ["*://www.google.com/search*"], types: ["main_frame"] },
  ["blocking"]
);

