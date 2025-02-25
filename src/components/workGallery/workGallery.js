import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes // instead of typescript
import styles from "./workGallery.module.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { photos } from "../../assets/photos";

function WorkGallery({ selectedPhotos }) {
  const imagesToDisplay = selectedPhotos || photos;

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery--getting-started",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className={styles.gallery} id="gallery--getting-started">
        {imagesToDisplay.map((photo, index) => (
          <a
            key={index}
            href={photo.full} // Full-size image URL
            data-pswp-width={photo.width}
            data-pswp-height={photo.height}
            target="_blank"
            rel="noreferrer"
          >
            <img src={photo.thumbnail} alt={`Gallery image ${photo.title}`} />
          </a>
        ))}
      </div>
    </div>
  );
}

// Define PropTypes for the component
WorkGallery.propTypes = {
  selectedPhotos: PropTypes.array,
};

export default WorkGallery;
