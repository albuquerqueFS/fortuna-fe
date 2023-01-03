import "./MapLayout.scss";

type MapLayoutProps = {
  mapForm: JSX.Element;
  map: JSX.Element;
};

export function MapLayout({ mapForm, map }: MapLayoutProps) {
  return (
    <div className="map__layout">
      <div className="map__layout--form">{mapForm}</div>
      <div className="map__layout--map">{map}</div>
    </div>
  );
}
