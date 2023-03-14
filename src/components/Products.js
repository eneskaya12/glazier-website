import Product from "./Product";

function Products() {
  return (
    <div className="p-10 bg-slate-200">
      <div className="flex flex-col">
        <span className="text-slate-700 text-3xl">Ürünler</span>
        <span className="text-4xl ml-3 font-medium">Cam Sistemleri</span>
      </div>
      <div className="h-auto flex flex-wrap justify-center">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Products;
