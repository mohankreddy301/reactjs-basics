import ProductItem from "./components/product-item";

const ProductList = ({ itemsList }) => {
  return (
    <div className="product-list-container">
      {itemsList.map((item) => {
        console.log("Product item:", item);
        return <ProductItem itemdata={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductList;
