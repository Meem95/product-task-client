import React, { useEffect, useState } from "react";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          product.map(item => (
            <div key={item._id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-48 object-cover"
                src={item.product_image}
                alt={item.product_name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.product_name}</div>
                <p className="text-gray-700 text-base">Brand: {item.brand_name}</p>
                <p className="text-gray-700 text-base">Price: ${item.price}</p>
                <p className="text-gray-700 text-base">Category: {item.category}</p>
                <p className="text-gray-700 text-base mt-2">{item.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <p className="text-gray-600 text-sm">Created: {new Date(item.creation_date).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
