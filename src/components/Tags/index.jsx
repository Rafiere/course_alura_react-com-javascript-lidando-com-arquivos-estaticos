import React from "react";

import styles from "./Tags.module.scss";

import photos from "../Gallery/fotos.json";

const Tags = ({ tags, photosFilter, setItens }) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por Tags:</p>
      <ul className={styles.tags__list}>
        <li onClick={() => setItens(photos)}>Todos</li>

        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => photosFilter(tag)}>
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;
