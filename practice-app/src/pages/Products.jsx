
import Breadcrumb from "../components/Breadcrumb";

function Products() {

  const breadcrumbItems = [
    { label: "Home" },
    { label: "Products" },
    { label: "Add Product" },
  ];

  return (
    <div className="p-8">

      <Breadcrumb items={breadcrumbItems} />

      <h1 className="mt-5 text-2xl font-bold">
        Add Product
      </h1>

    </div>
  );
}

export default Products;
