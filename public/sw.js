// Belajar Indonesia - Service Worker
// Provides offline caching for PWA functionality

const CACHE_NAME = 'belajar-indonesia-v3';
const STATIC_CACHE = 'belajar-indonesia-static-v3';

// Base path for GitHub Pages subdirectory deployment
const BASE_PATH = '/belajar-indonesia';

// Assets to cache on install - use relative paths
const PRECACHE_URLS = [
  BASE_PATH + '/',
  BASE_PATH + '/index.html',
  BASE_PATH + '/favicon.ico',
];

// Install event - precache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.log('[SW] Precache failed (some URLs may not exist yet):', err);
      });
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== STATIC_CACHE)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and cross-origin requests
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  
  // Skip API requests and Expo internal resources
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/_expo/')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // Return offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match(BASE_PATH + '/') || caches.match(BASE_PATH + '/index.html');
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});

// Handle push notifications (future use)
self.addEventListener('push', (event) => {
  if (!event.data) return;
  const data = event.data.json();
  self.registration.showNotification(data.title || 'Belajar Indonesia', {
    body: data.body || '是时候学习印尼语了！',
    icon: BASE_PATH + '/icon-192.png',
    badge: BASE_PATH + '/icon-192.png',
  });
});
