import React, { useState } from "react";
import styles from "./selected-work.module.css";
import { Link } from "react-router";
import WorkGallery from "../workGallery";
import { photos } from "../../assets/photos";

function SelectedWork() {

  const selectedPhotos = photos.filter(photo => 
    ["13", "16", "19",  "10", "45", "23"].includes(photo.title) 
  );

  return (
    <div id="selectedWork" className="container">  
      <WorkGallery selectedPhotos={selectedPhotos} />
      
      <Link to="/work" className={styles.btnWrap}>
        <button className={styles.viewBtn}>View All</button>
      </Link>
    </div>
  );
}

export default SelectedWork;
