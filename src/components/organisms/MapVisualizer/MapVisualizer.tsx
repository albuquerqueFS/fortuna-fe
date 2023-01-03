import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { ReactElement } from "react";
import { GoogleMap } from "../../atoms";

import "./MapVisualizer.scss";

const render = (status: Status): any => {
  switch (status) {
    case Status.LOADING:
      return <h1>Loading</h1>;
    case Status.FAILURE:
      return <h1>Error</h1>;
    case Status.SUCCESS:
      return <GoogleMap />;
  }
};

const center = { lat: -34.397, lng: 150.644 };
const zoom = 4;

export function MapVisualizer() {
  return (
    <Wrapper apiKey="AIzaSyDMlBP5Egn1yt4gdUTX1yZ3zprxPK8m6V8" render={render}>
      <GoogleMap center={center} zoom={zoom} />
    </Wrapper>
  );
}
