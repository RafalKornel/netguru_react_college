import React from 'react';
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';

const defaultPosition = {
    lat: 52.229913, lng: 21.011288
};

const Wrapper = styled.div`
    height: 100vh; 
    width: 100%;
`;

export default function GoogleMaap(props) {
    return (
        <Wrapper>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
                defaultCenter={defaultPosition}
                defaultZoom={11}
            >
            </GoogleMapReact>
        </Wrapper>
    );

}