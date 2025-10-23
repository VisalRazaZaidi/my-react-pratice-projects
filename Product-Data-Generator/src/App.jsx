import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [productData, setproductData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productStock: "",
    productImage: "",
  });
  const [isLoading, setisLoading] = useState(false)

  const fetchProduct = async () => {
    try {
      setisLoading(true)
      const response = await fetch("https://api.freeapi.app/api/v1/public/randomproducts/product/random")
      const data = await response.json();

      // Update the data if fetch call is successfull
      if (data.success && data.data) {
        setproductData({
          productName: data.data.title,
          productDescription: data.data.description,
          productPrice: data.data.price,
          productStock: data.data.stock,
          productImage: data.data.image, // this is an array so for accessing the element afterward use loop to get the index value;
        });
      } else {
        console.log(
          "Failed to fetch product data"
        )
      }

    } catch (error) {
      console.log(
          "Failed to fetch product data", error
        )
    } finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [])
  
  if (isLoading) return <p>Loading details...</p>;

  // if (productData.productStock >= 0 ) {
  //   return <p>Avaliable</p>
  // } else return <p>Not Avaliable</p>

  return (
    <>
      <div className="w-auto bg-white shadow rounded">
        <div
          className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        >
          <img src={productData?.productImage} alt="" />
          <div className="flex justify-between">
            <input type="checkbox" />
            <button className="text-white hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <div>
            <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
              Avaliable
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col items-center w-full">
          <h1 className="text-gray-800 text-center mb-2">{productData.productName}</h1>
          <p className="text-gray-400 font-light text-xs text-center">
            {productData.productDescription}
          </p>
          <p className="text-center text-gray-800 mt-1">${productData.productPrice}</p>
          <div className="inline-flex items-center mt-2">
            <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
              {productData.productStock}
            </div>
            <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
            Add to order
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
