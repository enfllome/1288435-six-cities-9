import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { COPYRIGHT, TILE } from '../const';
import City from '../types/city';

function useMap(
  city: City,
): [Map | null, MutableRefObject<HTMLElement | null>] {
  const { location } = city;
  const [map, setMap] = useState<Map | null>(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      const layer = new TileLayer(
        TILE,
        {
          attribution: COPYRIGHT,
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, location]);

  return [map, mapRef];
}

export default useMap;
