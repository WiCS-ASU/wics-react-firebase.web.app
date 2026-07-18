import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { pages } from './generatedPages.js';

const ROUTES = {
  '/': 'home',
  '/index': 'home',
  '/index.html': 'home',
  '/events': 'events',
  '/events.html': 'events',
  '/team': 'team',
  '/team.html': 'team',
  '/sponsors': 'sponsors',
  '/sponsors.html': 'sponsors'
};

function getPageKey() {
  return ROUTES[window.location.pathname] || 'home';
}

function runPageScript(script) {
  if (!script.trim()) return () => {};

  const timeouts = new Set();
  const intervals = new Set();
  const animationFrames = new Set();
  const idleCallbacks = new Set();
  const listeners = [];

  const originalSetTimeout = window.setTimeout.bind(window);
  const originalClearTimeout = window.clearTimeout.bind(window);
  const originalSetInterval = window.setInterval.bind(window);
  const originalClearInterval = window.clearInterval.bind(window);
  const originalRequestAnimationFrame = window.requestAnimationFrame?.bind(window);
  const originalCancelAnimationFrame = window.cancelAnimationFrame?.bind(window);
  const originalRequestIdleCallback = window.requestIdleCallback?.bind(window);
  const originalCancelIdleCallback = window.cancelIdleCallback?.bind(window);
  const originalAddEventListener = window.EventTarget.prototype.addEventListener;
  const originalRemoveEventListener = window.EventTarget.prototype.removeEventListener;

  window.setTimeout = (handler, timeout, ...args) => {
    const id = originalSetTimeout(() => {
      timeouts.delete(id);
      handler(...args);
    }, timeout);
    timeouts.add(id);
    return id;
  };

  window.clearTimeout = (id) => {
    timeouts.delete(id);
    return originalClearTimeout(id);
  };

  window.setInterval = (handler, timeout, ...args) => {
    const id = originalSetInterval(handler, timeout, ...args);
    intervals.add(id);
    return id;
  };

  window.clearInterval = (id) => {
    intervals.delete(id);
    return originalClearInterval(id);
  };

  if (originalRequestAnimationFrame && originalCancelAnimationFrame) {
    window.requestAnimationFrame = (handler) => {
      const id = originalRequestAnimationFrame((timestamp) => {
        animationFrames.delete(id);
        handler(timestamp);
      });
      animationFrames.add(id);
      return id;
    };

    window.cancelAnimationFrame = (id) => {
      animationFrames.delete(id);
      return originalCancelAnimationFrame(id);
    };
  }

  if (originalRequestIdleCallback && originalCancelIdleCallback) {
    window.requestIdleCallback = (handler, options) => {
      const id = originalRequestIdleCallback((deadline) => {
        idleCallbacks.delete(id);
        handler(deadline);
      }, options);
      idleCallbacks.add(id);
      return id;
    };

    window.cancelIdleCallback = (id) => {
      idleCallbacks.delete(id);
      return originalCancelIdleCallback(id);
    };
  }

  window.EventTarget.prototype.addEventListener = function addTrackedListener(type, listener, options) {
    listeners.push([this, type, listener, options]);
    return originalAddEventListener.call(this, type, listener, options);
  };

  try {
    // eslint-disable-next-line no-new-func
    const pageScript = new Function(script);
    pageScript();
  } catch (error) {
    console.error('WiCS page script failed:', error);
  }

  return () => {
    timeouts.forEach((id) => originalClearTimeout(id));
    intervals.forEach((id) => originalClearInterval(id));
    animationFrames.forEach((id) => originalCancelAnimationFrame?.(id));
    idleCallbacks.forEach((id) => originalCancelIdleCallback?.(id));
    listeners.forEach(([target, type, listener, options]) => {
      originalRemoveEventListener.call(target, type, listener, options);
    });

    window.setTimeout = originalSetTimeout;
    window.clearTimeout = originalClearTimeout;
    window.setInterval = originalSetInterval;
    window.clearInterval = originalClearInterval;
    if (originalRequestAnimationFrame) window.requestAnimationFrame = originalRequestAnimationFrame;
    if (originalCancelAnimationFrame) window.cancelAnimationFrame = originalCancelAnimationFrame;
    if (originalRequestIdleCallback) window.requestIdleCallback = originalRequestIdleCallback;
    if (originalCancelIdleCallback) window.cancelIdleCallback = originalCancelIdleCallback;
    window.EventTarget.prototype.addEventListener = originalAddEventListener;
  };
}

function StaticPage({ page }) {
  useLayoutEffect(() => {
    document.title = page.title || 'WiCS @ ASU';
    document.body.className = page.bodyClass || '';

    const style = document.createElement('style');
    style.dataset.pageStyle = page.key;
    style.textContent = page.style;
    document.head.appendChild(style);

    return () => {
      document.head.querySelectorAll('style[data-page-style]').forEach((node) => node.remove());
      document.body.className = '';
    };
  }, [page]);

  useEffect(() => {
    let cleanupScript = () => {};
    const setupTimer = window.setTimeout(() => {
      cleanupScript = runPageScript(page.script);
    }, 0);

    return () => {
      window.clearTimeout(setupTimer);
      cleanupScript();
    };
  }, [page]);

  return <div key={page.key} dangerouslySetInnerHTML={{ __html: page.body }} />;
}

export default function App() {
  const [pageKey, setPageKey] = useState(getPageKey);

  useEffect(() => {
    const handlePopState = () => setPageKey(getPageKey());
    window.addEventListener('popstate', handlePopState);

    const handleClick = (event) => {
      const link = event.target.closest('a[href]');
      if (!link) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin || link.target === '_blank') return;

      const nextKey = ROUTES[url.pathname];
      if (!nextKey) return;

      event.preventDefault();
      window.history.pushState({}, '', url.pathname);
      setPageKey(nextKey);
      window.scrollTo(0, 0);
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const page = useMemo(() => pages[pageKey] || pages.home, [pageKey]);

  return <StaticPage page={page} />;
}
