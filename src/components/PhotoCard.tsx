import React from "react";
import styles from "./PhotoCard.module.css";

type PhotoCardProps = {
  id: string;
  downloadUrl: string;
  author: string;
};

const PhotoCard: React.FC<PhotoCardProps> = ({ id, downloadUrl, author }) => {
  return (
    <div key={id} className={styles.photoCard}>
      <div>
        <img
          src={downloadUrl}
          alt={`Photo submitted by: ${author}`}
          title={`Photo submitted by: ${author}`}
          loading="lazy"
        />
      </div>
      <p>Photo number: {id}</p>
      <p>Submitted by: {author}</p>
      <p>Source: {downloadUrl}</p>
    </div>
  );
};

export default PhotoCard;
