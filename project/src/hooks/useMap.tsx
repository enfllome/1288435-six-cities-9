import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { COORDINATES, COPYRIGHT, TILE, ZOOM } from '../const';
import { CityName } from '../types/city-name';

function useMap(
  city: CityName,
): [Map | null, MutableRefObject<HTMLElement | null>] {
  const [map, setMap] = useState<Map | null>(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: COORDINATES[city].LAT,
          lng: COORDINATES[city].LNG,
        },
        zoom: ZOOM,
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
  }, [mapRef, map, city]);

  return [map, mapRef];
}

export default useMap;
