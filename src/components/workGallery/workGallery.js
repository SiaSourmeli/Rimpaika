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
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div>
      <h3 id="work">WORK</h3>
      <div className={styles.gallery} id="gallery">
        {imagesToDisplay.map((photo, index) => (
          <a
            key={index}
            href={photo.full}
            data-pswp-width={photo.width}
            data-pswp-height={photo.height}
            target="_blank"
            rel="noreferrer"
          >
            <img src={photo.thumbnail} alt={`Gallery ${photo.title}`} />
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
