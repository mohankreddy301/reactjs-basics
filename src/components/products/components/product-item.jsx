import "../../product.css";

const ProductItem = ({ itemdata }) => {
  return (
    <div className="productItem-container">
      <h4>{itemdata.title}</h4>
      <img src={itemdata.thumbnail} alt={itemdata.title} />
      <p>{itemdata.description}</p>
    </div>
  );
};

export default ProductItem;
