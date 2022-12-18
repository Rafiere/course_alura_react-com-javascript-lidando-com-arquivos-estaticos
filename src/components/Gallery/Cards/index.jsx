import React from "react";

import open from "./assets/open.png";
import favorite from "./assets/favorito.png";

const Cards = ({ photos, styles }) => {
  return (
    <ul className={styles.gallery__cards}>
      {photos.map((photo) => {
        return (
          <li key={photo.id} className={styles.gallery__card}>
            <img
              className={styles.gallery__image}
              src={photo.imagem}
              alt={photo.titulo}
            />
            <p className={styles.gallery__description}>{photo.titulo}</p>
            <div>
              <p>{photo.creditos}</p>
              <span>
                <img src={favorite} alt="Ícone de coração para curtir." />
                <img src={open} alt="Ícone para abrir o modal." />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cards;
