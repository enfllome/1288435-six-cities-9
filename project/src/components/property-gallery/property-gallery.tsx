import { v1 as uuidv4} from 'uuid';

type PropertyGalleryProps = {
  images: string[],
}

function PropertyGallery ({images}: PropertyGalleryProps): JSX.Element {
  const sliceImages = images.slice(0, 6);

  return (
    <div className="property__gallery">
      {
        sliceImages.map((img) => (
          <div key={`${uuidv4()}`} className="property__image-wrapper">
            <img className="property__image" src={img} alt="Photos studio" />
          </div>
        ))
      }
    </div>
  );
}

export default PropertyGallery;
