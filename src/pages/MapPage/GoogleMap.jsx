import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { emit } from "./mediator";
import Marker from "./Marker";
import { useMarkersStore } from "./store";

const defaultPosition = {
  lat: 52.229913,
  lng: 21.011288,
};

const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
`;

export default function GoogleMap() {
  const [{ markers }] = useMarkersStore();

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API,
          libraries: ["places"],
        }}
        defaultCenter={defaultPosition}
        defaultZoom={11}
        onGoogleApiLoaded={(e) => emit("mapLoaded", e.map)}
        onChange={(e) => emit("mapChanged", e)}
      >
        {markers.map((marker, i) => (
          <Marker
            lat={marker.lat}
            lng={marker.lng}
            title={marker.title}
            pageId={marker.pageid}
            key={i}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
  );
}
