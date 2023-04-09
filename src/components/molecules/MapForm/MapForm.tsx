import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { SearchBox } from "../../atoms";
import { useDispatch } from "react-redux";
import {
  setDeparture,
  setDestination,
  setDirectionType,
} from "../../../store/slices/routeSlice";
import { mapPlaceData } from "../../../utils/PlacesMapper";
import { SimpleSelect } from "../../atoms/SimpleSelect";

const MapContainer = styled(Grid)(({ theme }) => ({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

export function MapForm() {
  const dispatch = useDispatch();

  const defineOrigin = (place: google.maps.places.PlaceResult) => {
    dispatch(setDeparture(mapPlaceData(place)));
  };

  const defineDestination = (place: google.maps.places.PlaceResult) => {
    dispatch(setDestination(mapPlaceData(place)));
  };

  const handleDirectionType = (option: google.maps.TravelMode) => {
    dispatch(setDirectionType(option));
  };

  const traceRoute = () => {};

  return (
    <MapContainer container>
      <Grid>
        <Typography variant="body1">De onde irá partir?</Typography>
        <SearchBox placeholder="Ponto de partida" getPlace={defineOrigin} />
      </Grid>
      <Grid>
        <Typography variant="body1">Seu destino</Typography>
        <SearchBox placeholder="Destino" getPlace={defineDestination} />
      </Grid>
      <Grid>
        <Typography variant="body1">Como irá viajar?</Typography>
        <SimpleSelect
          options={[
            { label: "Carro", value: google.maps.TravelMode.DRIVING },
            { label: "Motocicleta", value: google.maps.TravelMode.BICYCLING },
            { label: "Caminhada", value: google.maps.TravelMode.WALKING },
          ]}
          onChange={handleDirectionType}
        />
      </Grid>
      <Grid>
        <Button variant="outlined" onClick={() => traceRoute()}>
          Traçar rota
        </Button>
      </Grid>
    </MapContainer>
  );
}
