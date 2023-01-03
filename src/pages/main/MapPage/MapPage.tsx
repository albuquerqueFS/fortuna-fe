import { MapForm, MapVisualizer } from "../../../components";
import { MapLayout } from "../../../layouts";

export function MapPage() {
  return <MapLayout mapForm={<MapForm />} map={<MapVisualizer />} />;
}
