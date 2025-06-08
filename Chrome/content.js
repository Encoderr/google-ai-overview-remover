const url = new URL(window.location.href);
const query = url.searchParams.get('q');

if (query && !query.includes('-ai')) {
  url.searchParams.set('q', query + ' -ai');
  window.location.replace(url.toString()); // Redirect the current tab
}
