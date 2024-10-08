import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  useEffect(() => {
    fetch("https://job-task-scic-server-ochre.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let updatedProducts = products
      .filter((product) => {
        return (
          (selectedCategory === "all" ||
            product.category === selectedCategory) &&
          (selectedBrand === "all" || product.brand_name === selectedBrand) &&
          product.price >= minPrice &&
          product.price <= maxPrice &&
          product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
      .sort((a, b) => {
        if (sortOption === "low-to-high") return a.price - b.price;
        if (sortOption === "high-to-low") return b.price - a.price;
        if (sortOption === "newest-first")
          return new Date(b.creation_date) - new Date(a.creation_date);
        return 0;
      });

    setFilteredProducts(updatedProducts);
  }, [
    searchTerm,
    selectedCategory,
    selectedBrand,
    minPrice,
    maxPrice,
    sortOption,
    products,
  ]);

  const handleCategoryChange = (event) =>
    setSelectedCategory(event.target.value);
  const handleBrandChange = (event) => setSelectedBrand(event.target.value);
  const handleMinPriceChange = (event) =>
    setMinPrice(Number(event.target.value));
  const handleMaxPriceChange = (event) =>
    setMaxPrice(Number(event.target.value));
  const handleSortChange = (event) => setSortOption(event.target.value);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1
        className="text-5xl text-center m-4 py-8 font-bold text-[#D9AF47]"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        All Delicias Food
      </h1>
      <div className="mb-4 mx-auto text-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded p-2 w-full md:w-1/2   mb-2 md:mb-0 "
        />
      </div>
      <div className="mb-4 flex flex-wrap gap-2 md:gap-6">
        <div className="mx-auto ">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border rounded p-2 flex-1 md:flex-none "
          >
            <option value="all">All Categories</option>
            <option value="salad">Salads</option>
            <option value="pasta">Pasta</option>
            <option value="main course">Main Courses</option>
            <option value="dessert">Desserts</option>
            <option value="beverage">Beverages</option>
            <option value="sushi">Sushi</option>
            <option value="sandwich">Sandwiches</option>
            <option value="breakfast">Breakfast</option>
            <option value="wrap">Wraps</option>
            <option value="stir fry">Stir Fry</option>
            <option value="flatbread">Flatbread</option>
            <option value="soup">Soup</option>
          </select>
          <select
            value={selectedBrand}
            onChange={handleBrandChange}
            className="border rounded p-2 flex-1 md:flex-none "
          >
            <option value="all">All Brands</option>
            <option value="Taco Fiesta">Taco Fiesta</option>
            <option value="Mediterranean Kitchen">Mediterranean Kitchen</option>
            <option value="Seafood Shack">Seafood Shack</option>
            <option value="Flatbread Factory">Flatbread Factory</option>
            <option value="Wing Stop">Wing Stop</option>
            <option value="Italian Delight">Italian Delight</option>
            <option value="British Bites">British Bites</option>
            <option value="Sweet Treats">Sweet Treats</option>
            <option value="Salad Corner">Salad Corner</option>
            <option value="BBQ Kings">BBQ Kings</option>
            <option value="Smoothie Bar">Smoothie Bar</option>
            <option value="Asian Delights">Asian Delights</option>
            <option value="Chicken House">Chicken House</option>
            <option value="Pancake Haven">Pancake Haven</option>
            <option value="Seafood Delight">Seafood Delight</option>
            <option value="Italian Bistro">Italian Bistro</option>
            <option value="Healthy Treats">Healthy Treats</option>
            <option value="Bakery Bliss">Bakery Bliss</option>
            <option value="Pizza Heaven">Pizza Heaven</option>
            <option value="Wrap Masters">Wrap Masters</option>
            <option value="Toast Corner">Toast Corner</option>
            <option value="Brunch Bistro">Brunch Bistro</option>
            <option value="Cheese Lovers">Cheese Lovers</option>
            <option value="Chili House">Chili House</option>
            <option value="Juice Bar">Juice Bar</option>
          </select>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border rounded p-2 flex-1 md:flex-none "
          >
            <option value="default">Sort By</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="newest-first">Date Added: Newest First</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 md:gap-4">
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="Min Price"
            className="border rounded p-2 flex-1"
            style={{ minWidth: "150px" }}
          />
          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Max Price"
            className="border rounded p-2 flex-1"
            style={{ minWidth: "150px" }}
          />
        </div>
        <p className="text-gray-700 mt-2">
          Price Range: ${minPrice} - ${maxPrice}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          currentProducts.map((item) => (
            <div
              key={item._id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-48 object-cover"
                src={item.product_image}
                alt={item.product_name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {item.product_name}
                </div>
                <p className="text-gray-700 text-base">
                <span  className="font-bold"> Brand:</span> {item.brand_name}
                </p>
                <p className="text-gray-700 text-base">  <span  className="font-bold">Price:</span> ${item.price}</p>
                <p className="text-gray-700 text-base">
                 <span className="font-bold" >Category:</span>  {item.category}
                </p>
                <p className="text-gray-700 text-base mt-2">
                  {item.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <p className="text-gray-600 text-sm">
                <span  className="font-bold">Created:</span>   {new Date(item.creation_date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border rounded p-2 mx-1 bg-gray-200"
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number + 1)}
            className={`border rounded p-2 mx-1 ${
              currentPage === number + 1
                ? "bg-[#D9AF47] text-white"
                : "bg-gray-200"
            }`}
          >
            {number + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border rounded p-2 mx-1 bg-gray-200"
        >
          Next
        </button>
      </div>
      <div className="p-6 py-12 bg-[#D9AF47] text-gray-900 shadow-lg mt-6 max-w-full">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free Delevery! Use code:</span>
              <span className="font-bold text-lg"> Hasina Palaise</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
