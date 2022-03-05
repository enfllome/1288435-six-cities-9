type City = {
  location: Location,
  name: string,
}

type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export default City;
