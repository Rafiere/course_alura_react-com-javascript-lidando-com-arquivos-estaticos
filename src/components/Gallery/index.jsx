import Tags from "../Tags";

import styles from "./Gallery.module.scss";

import photos from "./fotos.json";

import Cards from "./Cards";
import { useState } from "react";

const Gallery = () => {
  const [itens, setItens] = useState(photos);

  /* Com o "Set", os elementos dentro de um array não se repetirão. Com isso, estamos obtendo apenas as tags que não são repetidas. */
  const tags = [
    ...new Set(
      photos.map((photo) => {
        return photo.tag;
      })
    ),
  ];

  const filtraFotos = (tag) => {
    const novasFotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItens(novasFotos);
  };

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria!</h2>
      <Tags tags={tags} photosFilter={filtraFotos} setItens={setItens} />
      <Cards photos={itens} styles={styles} />
    </section>
  );
};

export default Gallery;
