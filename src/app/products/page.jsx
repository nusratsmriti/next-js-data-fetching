const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products",{cache:"force-cache"});
  return res.json();
};

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products length is {products.length}</h1>
    </div>
  );
}
