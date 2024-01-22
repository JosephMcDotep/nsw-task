import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./PhotoGallery.module.css";
import PhotoCard from "./PhotoCard";
import Button from "./Button";
import ErrorPage from "./ErrorPage";

type Photo = {
  id: string;
  download_url: string;
  author: string;
};

const MAX_PAGE_LIMIT = 10;

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchPhotos = async () => {
      try {
        setIsFetching(true);

        const response = await axios.get<Photo[]>(
          `https://picsum.photos/v2/list?page=${page}&limit=16`,
          {
            signal: abortController.signal,
          }
        );
        setPhotos((prevPhotos) => [...response.data]);
        setIsFetching(false);
        setError(false);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setPhotos([]);
        setError(true);
        setIsFetching(false);
      }
    };

    fetchPhotos();

    return () => {
      // abortController.abort();
    };
  }, [page]);

  const loadMore = (next: boolean) => {
    if (next) {
      setPage((prevPage) => prevPage + 1);
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Latest Image Collection</h1>

      {error ? (
        <ErrorPage />
      ) : (
        <>
          <div className={styles.pagingContainer}>
            Page {page} of {MAX_PAGE_LIMIT}
          </div>
          {isFetching ? (
            <div className={styles.loadingContainer}>
              Loading more images...
            </div>
          ) : (
            <div className={styles.gallery}>
              {photos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  id={photo.id}
                  downloadUrl={photo.download_url}
                  author={photo.author}
                />
              ))}
            </div>
          )}
          <div className={styles.pagingContainer}>
            Page {page} of {MAX_PAGE_LIMIT}
          </div>
          <div className={styles.navButtonContainer}>
            <div className={styles.buttonContainer}>
              <Button
                onClick={() => loadMore(false)}
                text="Previous Page"
                disabled={page === 1}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button
                onClick={() => loadMore(true)}
                text="Next Page"
                disabled={page === MAX_PAGE_LIMIT}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoGallery;
