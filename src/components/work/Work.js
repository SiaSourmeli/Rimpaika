"use client";

import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import PhotoAlbum from "react-photo-album";
import { photos } from "../../assets/photos";
import styles from "./work.module.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";


export function Work() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const moveToNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % photos.length);
  };

  const moveToPrev = () => {
    setCurrentImageIndex(
      (currentImageIndex + photos.length - 1) % photos.length
    );
  };

  return (
    <div id="work" className="container">
      <div className={styles.workGrid}>
        <RowsPhotoAlbum
          layout="rows"
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1;
            if (containerWidth < 1000) return 2;
            if (containerWidth < 1536) return 3;
            return 4;
          }}
          photos={photos}
 
          onClick={({ index }) => openLightbox(index)} // Open Lightbox on click
        />
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={photos[currentImageIndex].src}
          nextSrc={photos[(currentImageIndex + 1) % photos.length].src}
          prevSrc={
            photos[(currentImageIndex + photos.length - 1) % photos.length].src
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={moveToPrev}
          onMoveNextRequest={moveToNext}
          imageTitle={photos[currentImageIndex].title}
        />
      )}
    </div>
  );
}

export default Work;
