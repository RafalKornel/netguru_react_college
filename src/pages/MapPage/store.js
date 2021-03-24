// components/counter.js
import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: { markers: [], googleApiLoaded: false },
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
      console.log(getState());
      setState({ googleApiLoaded: value });
    },
  },
});

export const useMarkersStore = createHook(Store);
