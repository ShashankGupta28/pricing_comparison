import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProductPage from "./pages/ProductPage";

const App = () => {

  const [searchText, setSearchText] = useState("");

  function handleSearch(text){
    setSearchText(text);
  }

  return (
    <div className="site-wrapper">
      <Navbar handleSearch={handleSearch}/>
      <ProductPage searchText={searchText}/>;
    </div>
  );
};

export default App;
