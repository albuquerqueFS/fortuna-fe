import { useLoadScript } from "@react-google-maps/api";
import "./MapLayout.scss";

type MapLayoutProps = {
  mapForm: JSX.Element;
  map: JSX.Element;
};

export function MapLayout({ mapForm, map }: MapLayoutProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCG9FzUmcscxEZXJlECWqI1a9hHstHEKSY",
    libraries: ["places"],
  });

  if (!isLoaded) return <h1>Loading...</h1>;

  return (
    <div className="map__layout">
      <div className="map__layout--form">{mapForm}</div>
      <div className="map__layout--map">{map}</div>
    </div>
  );
}
