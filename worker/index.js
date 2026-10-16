export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Match the existing SPA routing: only extensionless paths use index.html.
    if (!url.pathname.includes('.') && ['GET', 'HEAD'].includes(request.method)) {
      url.pathname = '/';
      return env.ASSETS.fetch(new Request(url, request));
    }
    return env.ASSETS.fetch(request);
  }
};
