// Stub mraid.js for test creatives hosted on GitHub Pages.
// On Android the BidMachine SDK intercepts the "mraid.js" request and serves its own bridge,
// so this file is never used there. On iOS (WKWebView can't intercept https), this stub is
// fetched for real — it must NOT overwrite the mraid object injected by the SDK.
(function () {
  if (window.mraid) {
    console.log("[mraid-stub] native mraid already present, stub is a no-op");
  } else {
    console.log("[mraid-stub] no native mraid injected (plain browser?)");
  }
})();
