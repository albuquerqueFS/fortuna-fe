import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Map } from "../../atoms";
import { RootState } from "../../../store/index";

import "./MapVisualizer.scss";
import { MarkerType } from "../../../utils/PlacesMapper";
import { Coordinates } from "../../../types/Map";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

function Directions({
  destination,
  departure,
  travelMode = google.maps.TravelMode.DRIVING,
}: any) {
  const [response, setResponse] = useState<any>();

  const directionsCallback = (
    result: google.maps.DirectionsResult | null,
    status: google.maps.DirectionsStatus
  ) => {
    if (result !== null) {
      if (status === google.maps.DirectionsStatus.OK) {
        setResponse(result);
      } else {
        setResponse(null);
      }
    }
  };

  return (
    <>
      <DirectionsService
        options={{
          destination: { lat: destination.lat, lng: destination.lng },
          origin: { lat: departure.lat, lng: departure.lng },
          travelMode: travelMode,
        }}
        callback={directionsCallback}
      />
      {response && <DirectionsRenderer options={{ directions: response }} />}
    </>
  );
}

export function MapVisualizer() {
  const [mapRef, setMapRef] = useState(null);
  const [centerCoords, setCenterCoords] = useState({ lng: 10, lat: -80 });
  const [markers, setMarkers] = useState<Coordinates[]>([]);
  const [routeMarkers, setRouteMarkers] = useState<Coordinates[]>([]);

  const { departure, destination } = useSelector(
    (state: RootState) => state.route
  );

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenterCoords({
            lng: position.coords.longitude,
            lat: position.coords.latitude,
          });
        },
        (error) => {
          console.log({ error });
        }
      );
    }
  };

  const handleMapRef = (ref: any) => {
    setMapRef(ref);
  };

  useEffect(() => {
    setRouteMarkers((_) => {
      const newMarkers: Coordinates[] = [];

      if (departure.name) {
        const { lat, lng } = departure;
        setCenterCoords({ lat, lng });
        newMarkers.push({ lat, lng });
      }

      if (destination.name) {
        const { lat, lng } = destination;
        newMarkers.push({ lat, lng });
      }

      return newMarkers;
    });
  }, [departure, destination]);

  return (
    <>
      <Map
        zoom={14}
        center={centerCoords}
        markers={routeMarkers}
        onLoad={getUserLocation}
        useMapRef={handleMapRef}
        places={[]}
      >
        {departure && destination && Directions({ destination, departure })}
      </Map>
    </>
  );
}
