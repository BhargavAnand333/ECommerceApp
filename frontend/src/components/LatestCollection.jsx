import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  /* 
    ^^ 
    This uses the useContext hook to extract the products data from the ShopContext.
    By destructuring { products }, you only retrieve the products property from the context's value object.
     */

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST "} text2={"COLLECTIONS"} />

        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          veniam aspernatur cumque repellendus, necessitatibus optio voluptates.
          Itaque error fuga vitae impedit reiciendis? Ipsam reprehenderit
          reiciendis dolorem fugiat porro ipsa debitis!
        </p>
      </div>

      {/*Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
