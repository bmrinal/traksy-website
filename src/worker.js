export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/privacy") {
      url.pathname = "/privacy/";
      return Response.redirect(url.toString(), 308);
    }

    if (url.pathname.endsWith("/")) {
      const indexUrl = new URL(request.url);
      indexUrl.pathname = `${url.pathname}index.html`;
      const indexResponse = await env.ASSETS.fetch(new Request(indexUrl, request));
      if (indexResponse.status !== 404) return indexResponse;
    }

    return env.ASSETS.fetch(request);
  },
};
