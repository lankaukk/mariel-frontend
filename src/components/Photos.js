import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

export var Photos = (props) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let PROJECT_ID = "meytmqps";
    let DATASET = "production";
    let QUERY = encodeURIComponent('*[_type == "photo"]');

    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        setPhotos([]);
        if (result.length > 0) {
          result.forEach((photo) => {
            setPhotos((oldArray) => [...oldArray, photo]);
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="photo_container">
      {photos.map((photo) => (
        <img className="photo" src={photo.imageUrl} alt="pix" />
      ))}
    </div>
  );
};
