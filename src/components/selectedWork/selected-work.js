import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import styles from "./selected-work.module.css";
import { Link } from "react-router";

function SelectedWork() {
  const images = [
    {
      src: "https://ucarecdn.com/105338dc-735e-414c-a25e-432a876ac8d4/-/preview/683x682/-/quality/smart_retina/-/format/auto/",
      width: 683,
      height: 682,
      title: "13",
    },
    {
      src: "https://ucarecdn.com/22bdeb66-f466-453c-acf4-d17cdf48673f/-/preview/685x686/-/quality/smart_retina/-/format/auto/",
      width: 685,
      height: 686,
      title: "16",
    },
    {
      src: "https://ucarecdn.com/d1675cf4-4cbd-46fe-ba43-4e051a8bdd54/-/preview/688x686/-/quality/smart_retina/-/format/auto/",
      width: 688,
      height: 686,
      title: "19",
    },
    {
      src: "https://ucarecdn.com/a9608dca-c5d6-41ef-8361-21c1b44187e8/-/preview/566x720/-/quality/smart_retina/-/format/auto/",
      width: 566,
      height: 720,
      title: "55",
    },
    {
      src: "https://ucarecdn.com/c74f99d1-2a6b-4f03-a903-e9c944bccc75/-/preview/712x720/-/quality/smart_retina/-/format/auto/",
      width: 712,
      height: 720,
      title: "51",
    },
    {
      src: "https://ucarecdn.com/6e113419-2713-487a-92b5-0366e7ae5f05/-/preview/509x720/-/quality/smart_retina/-/format/auto/",
      width: 509,
      height: 720,
      title: "46",
    },
    {
      src: "https://ucarecdn.com/998668cd-30de-4ff6-8632-780d50f37a66/-/preview/720x720/-/quality/smart_retina/-/format/auto/",
      width: 720,
      height: 720,
      title: "10",
    },
    {
      src: "https://ucarecdn.com/77610f75-3731-4fc4-a4e0-edbfc7552382/-/preview/721x720/-/quality/smart_retina/-/format/auto/",
      width: 721,
      height: 720,
      title: "45",
    },
  ];

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
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const moveToPrev = () => {
    setCurrentImageIndex(
      (currentImageIndex + images.length - 1) % images.length
    );
  };

  return (
    <div id="selectedWork" className="container">
      <h3>WORK</h3>
      <div className={styles.gridContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.gridItem}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className={styles.gridImage}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[currentImageIndex].src}
          nextSrc={images[(currentImageIndex + 1) % images.length].src}
          prevSrc={
            images[(currentImageIndex + images.length - 1) % images.length].src
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={moveToPrev}
          onMoveNextRequest={moveToNext}
          imageTitle={images[currentImageIndex].title}
        />
      )}

      <Link to="/work" className={styles.btnWrap}>
        <button className={styles.viewBtn}>View All</button>
      </Link>
    </div>
  );
}

export default SelectedWork;
