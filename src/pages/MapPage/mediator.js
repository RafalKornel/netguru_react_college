import wikipediaAPI from "../../services/api/wikipedia";
import { useMarkersStore } from "../../pages/MapPage/store";

const listeners = {};
let map;

export function emit(name, event) {
  listeners[name](event);
}

function addListener(name, listener) {
  listeners[name] = listener;
}

function useMediator() {
  const [
    ,
    { setMarkers, setGoogleApiLoaded, setIsModalVisible, setArticleUrl },
  ] = useMarkersStore();
  function fetchArticles(e) {
    const { center: coord } = e;

    wikipediaAPI
      .getArticles({ coord, limit: 50 })
      .then((response) => response.query.geosearch)
      .then((data) => data.map(({ lon, ...rest }) => ({ ...rest, lng: lon })))
      .then((mappedData) => setMarkers(mappedData))
      .catch((err) => console.error(err));
  }

  function mapLoaded(mapInstance) {
    map = mapInstance;

    setGoogleApiLoaded(true);
  }

  function setMapCenter(location) {
    map && map.setCenter(location);
  }

  function markerClicked({ pageId }) {
    console.log(pageId);
    wikipediaAPI
      .getArticle({ pageId })
      .then(({ query }) => query.pages[pageId])
      .then((data) => setArticleUrl(data.fullurl))
      .then(() => setIsModalVisible(true))
      .catch((err) => console.error(err));
  }

  addListener("markerClicked", markerClicked);
  addListener("mapChanged", fetchArticles);
  addListener("mapLoaded", mapLoaded);
  addListener("searchBoxPlaceSelected", setMapCenter);
}

export function Mediator() {
  useMediator();

  return null;
}
