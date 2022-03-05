import { useEffect } from 'react';
import useMap from '../../hooks/useMap';
import City from '../../types/city';
import 'leaflet/dist/leaflet.css';
import Offer from '../../types/offers';
import { URL_MARKER_DEFAULT } from '../../const';
import { Icon, Marker } from 'leaflet';

type MapProps = {
  city: City,
  points: Offer[],
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ city, points }: MapProps): JSX.Element {
  const [map, mapRef] = useMap(city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude,
        }, {
          icon: defaultCustomIcon,
        });

        marker
          .addTo(map);
      });
    }
  }, [map, points]);

  return <section className="cities__map map" ref={mapRef} />;
}

export default Map;
