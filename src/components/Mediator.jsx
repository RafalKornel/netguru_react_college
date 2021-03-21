import wikipediaAPI from "../services/api/wikipedia";

const listeners = {};

export function emit(event, args) {
  listeners[event](args);
}

function addListener(name, listener) {
  listeners[name] = listener;
}

function useMediator() {
  function fetchArticles(coord) {
    wikipediaAPI
      .getArticles({ coord })
      .then((response) => console.log(response));
  }

  addListener("mapChanged", fetchArticles);
  addListener("mapLoaded", fetchArticles);
}

export function Mediator(props) {
  useMediator();

  return null;
}
