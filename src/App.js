import { useEffect, useMemo, useState } from 'react';
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
  if (!script.trim()) return;
  // eslint-disable-next-line no-new-func
  const pageScript = new Function(script);
  pageScript();
}

function StaticPage({ page }) {
  useEffect(() => {
    document.title = page.title || 'WiCS @ ASU';
    document.body.className = page.bodyClass || '';

    const style = document.createElement('style');
    style.dataset.pageStyle = page.key;
    style.textContent = page.style;
    document.head.appendChild(style);

    const timer = window.setTimeout(() => runPageScript(page.script), 0);

    return () => {
      window.clearTimeout(timer);
      document.head.querySelectorAll('style[data-page-style]').forEach((node) => node.remove());
      document.body.className = '';
    };
  }, [page]);

  return <div dangerouslySetInnerHTML={{ __html: page.body }} />;
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
