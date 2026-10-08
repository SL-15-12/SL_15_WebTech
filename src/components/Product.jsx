const Product = ({ name, price }) => {

  const handleShowProduct = () => {
    console.log(`Wybrano produkt: ${name}`);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Cena: {price} zł</p>
      <button onClick={handleShowProduct}>
        Pokaż produkt
      </button>
    </div>
  );
};

export default Product;