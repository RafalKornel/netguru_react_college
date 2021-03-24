import React, { useEffect } from "react";
import { Layout as AntLayout, Input } from "antd";
import styled from "styled-components";
import { useMarkersStore } from "../pages/MapPage/store";
import { emit } from "../pages/MapPage/mediator";

const { Header: AntHeader } = AntLayout;

const Logo = styled.h2`
  color: #ffffff;
`;

const SiteHeader = styled(AntHeader)`
  display: flex;
  flex-direction: row;
  padding: 0 1em;
`;

const SearchBox = styled(Input).attrs({
  type: "test",
  placeholder: "Search adress",
})`
  height: 2em;
  margin: auto 1em;
  width: 300px;
`;

export default function Header() {
  const [{ googleApiLoaded }] = useMarkersStore();
  useEffect(() => {
    if (googleApiLoaded) {
      const input = document.getElementById("search-box");
      const searchBox = new window.google.maps.places.Autocomplete(input);
      searchBox.addListener("place_changed", () => {
        const place = searchBox.getPlace();

        const {
          geometry: { location },
        } = place;

        emit("searchBoxPlaceSelected", location.toJSON());
      });
    }
  }, [googleApiLoaded]);

  return (
    <SiteHeader>
      <Logo>Wikipedia Map</Logo>
      <SearchBox id={"search-box"} />
    </SiteHeader>
  );
}
