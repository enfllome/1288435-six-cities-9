type PropertyGalleryProps = {
  images: string[],
}

function PropertyGallery ({images}: PropertyGalleryProps): JSX.Element {
  const sliceImages = images.slice(0, 6);

  return (
    <div className="property__gallery">
      {
        sliceImages.map((img, idx) => (
          <div key={`${idx + img}`} className="property__image-wrapper">
            <img className="property__image" src={img} alt="Photos studio" />
          </div>
        ))
      }
    </div>
  );
}

export default PropertyGallery;
