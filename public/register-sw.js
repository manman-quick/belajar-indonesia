// Register Service Worker for PWA support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js')
      .then(function (registration) {
        console.log('[PWA] Service Worker registered:', registration.scope);
      })
      .catch(function (error) {
        console.log('[PWA] Service Worker registration failed:', error);
      });
  });
}

// PWA install prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Dispatch custom event so React can show install button
  window.dispatchEvent(new CustomEvent('pwaInstallReady', { detail: { prompt: e } }));
});

window.addEventListener('appinstalled', () => {
  console.log('[PWA] App installed successfully');
  deferredPrompt = null;
});
