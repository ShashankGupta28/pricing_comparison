import { useEffect, useState } from "react";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import ProductList from "../components/ProductList/ProductList";
import axios from "axios";
import laptopData from "../laptop_product_info.json";

const ProductPage = ({searchText}) => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    // if(searchText){
    //   const params = { api_key: process.env.REACT_APP_RAINFOREST_API_KEY,   amazon_domain: "amazon.com",   type: "search", search_term : searchText };
    //   axios.get('https://api.rainforestapi.com/request', { params })
    //    .then(response => { 
    //     console.log(JSON.stringify(response.data));
    //     setProducts(response.data.search_results);
    //      })
    //    .catch(error => {  console.log(error);})
    // }

   console.log(laptopData.search_results);
   setProducts(laptopData.search_results);

  },[searchText])

  return (
    <div className="product-page">
      <FilterPanel products={products} setProducts={setProducts} />
      <ProductList searchText={searchText} products={products} setProducts={setProducts} />
    </div>
  );
};

export default ProductPage;
