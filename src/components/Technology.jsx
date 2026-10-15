import { useState } from "react";

function Technology({ name, category, hours, image }) {

  const getImageUrl = (fileName) => {
    return new URL(`../assets/${fileName}`, import.meta.url).href;
  };

  const [likes, setLikes] = useState(0);

  return (
    <section>
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>
      <p><img src={getImageUrl(image)} alt={image}></img></p>
      <p>Polubienia: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>
        Lubię
      </button>
      <button onClick={() => setLikes(0)}>
        Reset
      </button>
    </section>
  );
}

export default Technology;