// components/counter.js
import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: { markers: [] },
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
  },
});

export const useMarkersStore = createHook(Store);
