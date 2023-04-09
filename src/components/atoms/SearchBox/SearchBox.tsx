import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";

type SearchBoxProps = {
  placeholder?: string;
  getPlace: (place: google.maps.places.PlaceResult) => any;
};

export function SearchBox({ placeholder, getPlace }: SearchBoxProps) {
  const ref = useRef(null);

  useEffect(() => {
    const searchBox = new window.google.maps.places.SearchBox(
      ref.current!["children"][0]["children"][0]
    );

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces()!;
      if (places.length == 0) {
        return;
      }

      getPlace(places[0]);
    });
  }, [ref]);

  return <TextField ref={ref} type="text" placeholder={placeholder} />;
}
