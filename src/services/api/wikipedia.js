import ky from "ky";

function getArticles({ coord, radius = 10000, limit = 10 } = {}) {
  const params = {
    action: "query",
    list: "geosearch",
    format: "json",
    origin: "*",
  };
  if (!coord) {
    console.error("Wikipedia API: no coord passed to getArticles");
  }
  return ky
    .get(`https://en.wikipedia.org/w/api.php?`, {
      searchParams: {
        ...params,
        gscoord: coord.lat + "|" + coord.lng,
        gsradius: radius,
        gslimit: limit,
      },
    })
    .json();
}

const api = { getArticles };

export default api;
