import wikipediaAPI from "../../services/api/wikipedia";
import { useMarkersStore } from "../../pages/MapPage/store";

const listeners = {};

export function emit(name, event) {
  listeners[name](event);
}

function addListener(name, listener) {
  listeners[name] = listener;
}

function useMediator() {
  const [, { setMarkers, addMarkers }] = useMarkersStore();
  function fetchArticles(e) {
    const { center: coord } = e;

    wikipediaAPI
      .getArticles({ coord, limit: 50 })
      .then((response) => response.query.geosearch)
      .then((data) => data.map(({ lon, ...rest }) => ({ ...rest, lng: lon })))
      .then((mappedData) => setMarkers(mappedData))
      .catch((err) => console.error(err));
  }

  addListener("mapChanged", fetchArticles);
  addListener("mapLoaded", fetchArticles);
}

export function Mediator() {
  useMediator();

  return null;
}
