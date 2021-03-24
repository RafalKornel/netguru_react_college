// components/counter.js
import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: {
    markers: [],
    googleApiLoaded: false,
    isModalVisible: false,
    articleUrl: null,
  },
  actions: {
    addMarkers: (markers) => ({ setState, getState }) => {
      const existingMarkers = getState().markers;
      const existingIndices = existingMarkers.map((marker) => marker.pageid);
      const markersWithoutDuplicates = markers.filter(
        (marker) => !existingIndices.includes(marker.pageid)
      );
      setState({
        markers: [...existingMarkers, ...markersWithoutDuplicates],
      });
    },
    setMarkers: (markers) => ({ setState }) => {
      setState({ markers });
    },
    setGoogleApiLoaded: (value) => ({ setState, getState }) => {
      setState({ googleApiLoaded: value });
    },
    setIsModalVisible: (value) => ({ setState, getState }) => {
      setState({ isModalVisible: value });
    },
    setArticleUrl: (value) => ({ setState, getState }) => {
      setState({ articleUrl: value });
    },
  },
});

export const useMarkersStore = createHook(Store);
