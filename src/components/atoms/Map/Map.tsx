import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Coordinates } from "../../../types/Map";

type MapProps = {
  children?: any;
  zoom: number;
  center: Coordinates;
  markers?: Coordinates[];
  places?: any[];
  useMapRef?: (ref: any) => any;
  onClick?: () => any;
  onLoad?: () => any;
};

export function Map({
  children,
  zoom,
  center,
  markers,
  places,
  onClick,
  onLoad,
  useMapRef,
}: MapProps) {
  const [map, setMap] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      useMapRef!(ref);
    }
  });

  return (
    <GoogleMap
      ref={ref}
      zoom={zoom}
      center={center}
      onClick={onClick}
      onLoad={onLoad}
      mapContainerStyle={{ height: "100vh", width: "100%" }}
    >
      {places &&
        places.map((place) => (
          <MarkerF
            key={place.geometry.lat().toString()}
            position={place.geometry}
          />
        ))}
      {markers &&
        markers.map((marker, i) => <MarkerF key={i} position={marker} />)}
      {children}
    </GoogleMap>
  );
}

export default memo(Map);
