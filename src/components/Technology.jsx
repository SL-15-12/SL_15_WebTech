function Technology({ name, category, hours, image }) {

  const getImageUrl = (fileName) => {
    return new URL(`../assets/${fileName}`, import.meta.url).href;
  };

  return (
    <section>
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>
      <p><img src={getImageUrl(image)} alt={image}></img></p>
    </section>
  );
}

export default Technology;