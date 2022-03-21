import { useEffect } from 'react';
import useMap from '../../hooks/useMap';
import City from '../../types/city';
import 'leaflet/dist/leaflet.css';
import Offer from '../../types/offers';
import leaflet, { Icon, Marker } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: City,
  points: Offer[],
  className: string,
  selectedOffer?: Offer | null,
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map({ city, points, selectedOffer, ...className }: MapProps): JSX.Element {
  const [map, mapRef] = useMap(city);
  const markers = leaflet.layerGroup();
  markers.clearLayers();
  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude,
        }, {
          icon: (selectedOffer && point.id === selectedOffer.id)
            ? currentCustomIcon
            : defaultCustomIcon,
        });

        markers.addLayer(marker);
      });
      markers.addTo(map);
    }

    return () => {
      markers.clearLayers();
    };
  }, [map, points, markers, selectedOffer]);

  return <section ref={mapRef} {...className} />;
}

export default Map;
