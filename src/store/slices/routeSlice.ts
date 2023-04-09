import { MarkerProps } from "@react-google-maps/api";
import { createSlice } from "@reduxjs/toolkit";
import { MarkerType } from "../../utils/PlacesMapper";

enum TravelMode {
  BICYCLING = "BICYCLING",
  DRIVING = "DRIVING",
  TRANSIT = "TRANSIT",
  WALKING = "WALKING",
}

type InitialStateType = {
  departure: MarkerType;
  destination: MarkerType;
  directionType: TravelMode;
};

const initialState: InitialStateType = {
  departure: {
    lat: 0,
    lng: 0,
    name: "",
    formatted_address: "",
    types: [],
    address_components: [],
  },
  destination: {
    lat: 0,
    lng: 0,
    name: "",
    formatted_address: "",
    types: [],
    address_components: [],
  },
  directionType: TravelMode.DRIVING,
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setDeparture(state, action) {
      state.departure = { ...action.payload };
    },
    setDestination(state, action) {
      state.destination = { ...action.payload };
    },
    setDirectionType(state, action) {
      state.directionType = action.payload;
    },
  },
});

export const routeReducer = routeSlice.reducer;
export const { setDirectionType, setDeparture, setDestination } =
  routeSlice.actions;
