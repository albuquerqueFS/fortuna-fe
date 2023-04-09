export type MarkerType = {
  lat: number;
  lng: number;
  name: string;
  formatted_address: string;
  types: string[];
  address_components: google.maps.GeocoderAddressComponent[];
};

export function mapPlaceData(
  place: google.maps.places.PlaceResult
): MarkerType {
  return {
    lat: place.geometry?.location?.lat() || 0,
    lng: place.geometry?.location?.lng() || 0,
    name: place.name || "",
    types: place.types || [],
    address_components: place.address_components || [],
    formatted_address: place.formatted_address || "",
  };
}
