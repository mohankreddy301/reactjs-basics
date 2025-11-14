import ProductItem from "./components/product-item";

const ProductList = ({ itemsList }) => {
  console.log("Items List in ProductList:", itemsList.length);
  return (
    <div className="product-list-container">
      {itemsList.map((item) => {
        return <ProductItem itemdata={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductList;
